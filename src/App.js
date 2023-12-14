import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllTenantInfo from './components/ViewAllTenantInfo';

function App() {
  return (
    <div className="App">
      <h1>griddle</h1>
      <BrowserRouter>
      <Routes>
        <Route path={"/tenant"} element={<ViewAllTenantInfo/>} exact={true}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
