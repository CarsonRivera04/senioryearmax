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
      <MasonryGallery />
      <button className="join-button">
        <a href="mailto:carsonrivera04@gmail.com" target="_blank" rel="noopener noreferrer">
          Join the movement
        </a>
      </button>
    </section>
  );
}

function App() {
  return (
    <main className="page">
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

export default App
