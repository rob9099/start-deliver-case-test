import "./styles.css";
import Home from "./pages/home/Home";
import Customers from './pages/customers/Customers'
import SignOut from "./pages/signOut/SignOut";
import Details from "./pages/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
