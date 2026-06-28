import type { CSSProperties } from 'react'
import './Progress.css'

type ProgressProps = {
  done: number
  total: number
}

const depthMarks = [0, 25, 50, 75, 100]

function Progress({ done, total }: ProgressProps) {
  const rawProgress = total > 0 ? (done / total) * 100 : 0
  const progress = Math.min(Math.max(rawProgress, 0), 100)
  const roundedProgress = Math.round(progress)
  const progressStyle = {
    '--progress-depth': `${progress}%`,
  } as CSSProperties

  return (
    <>
      <h2>Watch the senior slugs sink away...</h2>
    <section
      className="ocean-progress"
      aria-label="Senior Year Max progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={roundedProgress}
      role="progressbar"
      style={progressStyle}
    >
      <div className="water-zone">
        <div className="depth-scale" aria-hidden="true">
          {depthMarks.map((mark) => (
            <span className="depth-mark" key={mark} style={{ top: `${mark}%` }}>
              {mark}% 
            </span>
          ))}
        </div>

        <div className="submarine-track">
          <img src="/sub.png" alt="" className="submarine-image" />
          <div className="depth-readout">
            <strong>{roundedProgress}%</strong>
            <span>{done} of {total} done</span>
          </div>
        </div>
      </div>

      <div className="finish-line">
        <div className="checker-row" aria-hidden="true" />
        <div className="job-row">
          <img src="/job.png" alt="Job application" className="job-image" />
        </div>
        <div className="checker-row" aria-hidden="true" />
      </div>
    </section>
    </>
  )
}

export default Progress
