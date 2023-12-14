// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllTenantInfo from './components/tenant/ViewAllTenantInfo';
import ViewAllLandlordInfo from './components/landlord/ViewAllLandlordInfo';
import LoginPage from './components/LoginPage';
import ViewPaymentHistory from './components/tenant/ViewPaymentHistory';
import TenantPayment from './components/tenant/TenantPayment';
import AddCard from './components/tenant/AddCard';

function App() {
  return (
    <div className="App">
      {/* <img src="./img/logo.png" alt="griddle"/> */}
      <h1>griddle</h1>
      <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<LoginPage/>} exact={true}/>
          <Route path={"/landlord"} element={<ViewAllLandlordInfo />} exact={true}/>
          <Route path={"/tenant/dashboard"} element={<ViewAllTenantInfo />} exact={true}/>
          <Route path={"/tenant/paymentHistory"} element={<ViewPaymentHistory/>} exact={true}></Route>
          <Route path={"/tenant/newPayment"} element={<TenantPayment/>} exact={true}></Route>
          <Route path={"/tenant/newCard"} element={<AddCard/>} exact={true}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

