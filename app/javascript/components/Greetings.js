// app/javascript/components/Greeting.js
import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  // Fetch a random greeting from your Rails API
  useEffect(() => {
    async function fetchGreeting() {
      try {
        const response = await fetch('/random_greeting'); // Your API endpoint
        const data = await response.json();
        setGreeting(data.greeting);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    }

    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
