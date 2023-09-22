import React from 'react';
// import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
// import Program from './components/Programs/Program';
import Programs from './components/Programs/Programs';
import Solution from './components/Solutions/Solution';
import Testimonials from './components/Testimonials/Testimonials';
import Companies from './components/companies/Companies';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient' />
        <NavBar />
        <Hero />
      </div>

      <div className='solutions'>
        <Solution />
      </div>
      <div>
        <Programs />
      </div>
      <Companies />
      <div>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;

      // <div>
      // <Program/>
      // </div>