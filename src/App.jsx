import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router";
import jsx from "./pages/ExamplePage";
import UseRefPage from "./pages/UseRefPage";
import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from "./pages/MyRCFieldForm";
import ContextPage from "./pages/ContextPage";
import StatePage from "./pages/StatePage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseMemoPage from "./pages/UseMemoPage";
import SuspensePage from "./pages/SuspensePage";
import TransitionPage from "./pages/TransitionPage";
import UseDeferredValuePage from "./pages/UseDeferredValuePage";
import LoadingPage from "./pages/LoadingPage";
import TableForm from "./pages/TableForm";

// redux的核心源码
// function createState() {
//   let state;

//   // get
//   // set

//   return {get,set}
// }

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="border">
          <NavLink to="/">component</NavLink>
          <NavLink to="/state">state</NavLink>
          <NavLink to="/useRef">useRef</NavLink>
          <NavLink to="/antdForm">antdForm</NavLink>
          <NavLink to="/myRCFieldForm">myRCFieldForm</NavLink>
          <NavLink to="/context">context</NavLink>
          <NavLink to="/useMemo">useMemo</NavLink>
          <NavLink to="/useCallback">useCallback</NavLink>
          <NavLink to="/suspense">suspense</NavLink>
          <NavLink to="/transition">transition</NavLink>
          <NavLink to="/useDeferredValue">useDeferredValue</NavLink>
          <NavLink to="loading">loading</NavLink>
          <NavLink to="/table">table</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={jsx} />
          <Route path="/state" element={<StatePage />} />
          <Route path="/useRef" element={<UseRefPage />} />
          <Route path="/antdForm" element={<AntdFormPage />} />
          <Route path="/myRCFieldForm" element={<MyRCFieldForm />} />
          <Route path="/context" element={<ContextPage />} />
          <Route path="/useMemo" element={<UseMemoPage />} />
          <Route path="/useCallback" element={<UseCallbackPage />} />
          <Route path="/suspense" element={<SuspensePage />} />
          <Route path="/transition" element={<TransitionPage />} />
          <Route path="/useDeferredValue" element={<UseDeferredValuePage />} />
          <Route path="loading" element={<LoadingPage />} />
          <Route path="/table" element={<TableForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
