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
          src="https://technical-symptoms-381085.framer.app"
          title="Embedded Webpage"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />

        <button style={{
          position: 'absolute',
          bottom: '17px',
          right: '24px',
          width: '157px',
          height: '40px',
          backgroundColor: 'black',
          color: "white",
          borderRadius: '13px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
        }}
          onClick={() => {
            alert('Button clicked!')
          }}
        >
          Start Free Trial !
        </button>

      </div>
    </>
  )
}

export default App
// __framer-badge-container