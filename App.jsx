import { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>OpenHands Chat</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
        rows={4}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <br />
      <button onClick={handleSend}>Send</button>
      <pre style={{ marginTop: '1rem' }}>{response}</pre>
    </div>
  );
}

export default App;
