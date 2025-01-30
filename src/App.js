import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Userresponse from './Components/Userresponse';
import Sign from './Components/Sign';

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userresponse" element={<Userresponse />} />
</Routes>
</Router>
    </div>
  );
}

export default App;
