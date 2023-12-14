// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllTenantInfo from './components/tenant/ViewAllTenantInfo';
import ViewAllLanlordInfo from './components/landlord/ViewAllLanlordInfo';
import LoginPage from './components/LoginPage';
import ViewPaymentHistory from './components/tenant/ViewPaymentHistory';
import TenantPayment from './components/tenant/TenantPayment';

function App() {
  return (
    <div className="App">
      <h1>griddle</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/tenant/dashboard" element={<ViewAllTenantInfo />} />
          <Route path="/landlord" element={<ViewAllLanlordInfo />} />
          <Route path={"/tenant/paymentHistory"} element={<ViewPaymentHistory/>} exact={true}></Route>
        <Route path={"/tenant/newPayment"} element={<TenantPayment/>} exact={true}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

