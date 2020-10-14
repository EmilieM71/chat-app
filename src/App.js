import React from 'react';
import Contact from './components/Contact'

function App(props) {
  return (
    <div className="App">
      <Contact name="Jared Gray" avatar="https://randomuser.me/api/portraits/men/59.jpg" isOnline/>
      <Contact name="Lisa Riley" avatar="https://randomuser.me/api/portraits/women/6.jpg" />
      <Contact name="Celina Castillo" avatar="https://randomuser.me/api/portraits/women/26.jpg" isOnline/>
    </div>
  );
}

export default App;
