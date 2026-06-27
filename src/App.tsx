import './App.css'
import ActivityTagCloud from './components/ActivityTagCloud.tsx'
import CustomCountdown from './components/CustomCountdown.tsx'

function ComponentArea() {
  return (
    <section className="component-area" aria-label="React component area">
      <ActivityTagCloud />
    </section>
  );
}

function App() {
  return (
    <main className="page">
      <h1>Senior Year Max&trade;</h1>
      <p>90,000 hours. 3,750 days. 123 months. 10.25 years.</p>
      <p>That is the average amount of time someone will spend at w*rk over a lifetime.</p>
      <p>But before we get there...</p>
      <p><CustomCountdown /> until Senior Year Max&trade;</p>
      <ComponentArea />
    </main>
  )
}

export default App
