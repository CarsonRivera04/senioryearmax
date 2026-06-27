import './App.css'

function ComponentArea() {
  return (
    <section className="component-area" aria-label="React component area">
      <p>Future React components </p>
    </section>
  )
}

function App() {
  return (
    <main className="page">
      <h1>Senior Year Max&trade;:</h1>
      <p>90,000 hours. 3,750 days. 123 months. 10.25 years.</p>
      <p>That is the average amount of time someone will spend at w*rk over a lifetime.</p>
      <p>But before we get there...</p>
      <p>We will do everything (and I mean everything) there is to do at THE Florida State University.</p>
      <p>Welcome to Senior Year Max&trade;</p>
      <ComponentArea />
    </main>
  )
}

export default App
