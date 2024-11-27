import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConcertsHome from "./pages/ConcertsHome";
import City from "./pages/City";
import Trending from "./pages/Trending";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        {/* 嵌套 */}
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/settings">Settings</Link>

        {/* 动态路由 */}
        <Link to="/concerts">Concerts</Link>
        <Link to="/concerts/beijing">city</Link>
        <Link to="/concerts/trending">Trending</Link>

        {/* 权限路由 */}
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* 嵌套 */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 动态路由 */}
        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route>

        {/* 权限路由 */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
