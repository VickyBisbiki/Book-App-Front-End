import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/customers">Customers</NavLink>{" | "}
      </nav>

      <Routes>
        <Route path="/"           element={<CustomersPage />} />  {/* default */}
        <Route path="/customers"  element={<CustomersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
