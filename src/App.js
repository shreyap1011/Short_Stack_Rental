import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllTenantInfo from './components/tenant/ViewAllTenantInfo';
import ViewPaymentHistory from './components/tenant/ViewPaymentHistory';
import TenantPayment from './components/tenant/TenantPayment';

function App() {
  return (
    <div className="App">
      <h1>griddle</h1>
      <BrowserRouter>
      <Routes>
        <Route path={"/tenant/dashboard"} element={<ViewAllTenantInfo/>} exact={true}></Route>
        <Route path={"/tenant/paymentHistory"} element={<ViewPaymentHistory/>} exact={true}></Route>
        <Route path={"/tenant/newPayment"} element={<TenantPayment/>} exact={true}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
