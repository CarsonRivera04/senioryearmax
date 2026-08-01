import { useEffect, useState } from 'react'
import './App.css'
import ActivityTagCloud from './components/ActivityTagCloud.tsx'
import CustomCountdown from './components/CustomCountdown.tsx'
import MasonryGallery from './components/MasonryGallery.tsx'
import Weather from './components/Weather.tsx'

function ComponentArea() {
  return (
    <section className="component-area" aria-label="React component area">
      <Weather/>
      <ActivityTagCloud />
      <button className="join-button">
        <a href="mailto:carsonrivera04@gmail.com" target="_blank" rel="noopener noreferrer">
          Join the movement
        </a>
      </button>
    </section>
  );
}

function Navigation({ currentPage }: { currentPage: 'home' | 'gallery' }) {
  const isGallery = currentPage === 'gallery'

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="nav-button" href={isGallery ? "#/" : "#/gallery"}>
        {isGallery ? 'Back home' : 'View gallery'}
      </a>
    </nav>
  )
}

function HomePage() {
  return (
    <main className="page">
      <Navigation currentPage="home" />
      <section className="intro">
        <div className="intro-text">
          <h1>Senior Year Max&trade;</h1>
          <p>90,000 hours. 3,750 days. 123 months. 10.25 years.</p>
          <p>That is the average amount of time someone will spend at w*rk over a lifetime.</p>
          <p>But before we get there...</p>
          <p><CustomCountdown /> until Senior Year Max&trade;</p>
        </div>
        <img className="time-image" src="/time.png" alt="Time" />
      </section>
      <ComponentArea />
    </main>
  )
}

function GalleryPage() {
  return (
    <main className="page">
      <Navigation currentPage="gallery" />
      <MasonryGallery />
    </main>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const isGalleryPage = hash === '#/gallery'

  return isGalleryPage ? <GalleryPage /> : <HomePage />
}

export default App
