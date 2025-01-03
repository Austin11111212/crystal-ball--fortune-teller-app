import React, { useState } from 'react';

const FortuneTeller = () => {
  const [fortune, setFortune] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFortune = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/fortune');
      const data = await response.json();
      setFortune(data.fortune);
    } catch (error) {
      console.error('Error fetching fortune:', error);
      setFortune('Failed to fetch fortune. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Crystal Ball - Fortune Teller</h1>
      <button onClick={fetchFortune} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {loading ? 'Consulting the crystal ball...' : 'Get Your Fortune'}
      </button>
      {fortune && <p style={{ marginTop: '20px', fontSize: '18px' }}>{fortune}</p>}
    </div>
  );
};

export default FortuneTeller;
