// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllTenantInfo from './components/ViewAllTenantInfo';
import ViewAllLanlordInfo from './components/ViewAllLanlordInfo';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <h1>griddle</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/tenant" element={<ViewAllTenantInfo />} />
          <Route path="/landlord" element={<ViewAllLanlordInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

