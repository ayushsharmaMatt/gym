// import React from 'react';
// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }


// export default App;
// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Construction Company</h1>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>

      <section>
        <h2>Welcome to our Construction Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies eros eu est tempus, vel sollicitudin elit vulputate.
        </p>
        <p>Check out our services and recent projects to see what we can offer.</p>
      </section>
      <footer>
        &copy; {new Date().getFullYear()} Construction Company. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
