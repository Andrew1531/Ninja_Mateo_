import React from 'react';
import './App.css'; // Import the CSS for this component

function App() {
  return (
    <div className="ninja-academy-container">
      <header className="ninja-header">
        <h1>Welcome, Young Ninja Mateo!</h1>
        <p>Your English Language Training Begins Now!</p>
      </header>

      <main className="ninja-main-content">
        <section className="training-area">
          <h2>Training Dojo: Master the Alphabet</h2>
          <p>Complete this challenge to earn your first belt!</p>
        </section>

        <section className="missions-area">
          <h2>Ninja Missions: Spell, Sentence, Read!</h2>
          <p>Prove your skills and become a true English master!</p>
        </section>
      </main>

      <footer className="ninja-footer">
        <p>&copy; 2026 Mateo's Ninja English Academy</p>
      </footer>
    </div>
  );
}

export default App;
