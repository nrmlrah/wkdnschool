function App() {

  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
          }
        `}
      </style>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="https://wall.page/9qa7ej" // Replace with your own URL
          title="Embedded Webpage"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />

      </div>
    </>
  )
}

export default App
// __framer-badge-container
