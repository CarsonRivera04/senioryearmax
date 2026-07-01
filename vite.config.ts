import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const picsDir = path.resolve(projectRoot, 'public/pics')
const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp'])

function isInsidePicsDir(filePath: string) {
  const resolvedFile = path.resolve(filePath)

  return resolvedFile === picsDir || resolvedFile.startsWith(`${picsDir}${path.sep}`)
}

function readPicFiles() {
  if (!fs.existsSync(picsDir)) {
    return []
  }

  return fs
    .readdirSync(picsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))
}

function publicPicsPlugin(): Plugin {
  const virtualModuleId = 'virtual:pics'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'public-pics',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(readPicFiles())}`
      }
    },
    configureServer(server) {
      server.watcher.add(picsDir)
      server.watcher.on('all', (_event, filePath) => {
        if (!isInsidePicsDir(filePath)) {
          return
        }

        const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId)

        if (mod) {
          server.moduleGraph.invalidateModule(mod)
        }

        server.ws.send({ type: 'full-reload' })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), publicPicsPlugin()],
  base: '/',
})
