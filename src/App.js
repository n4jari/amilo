import {
  Nav,
  Home,
  Footer,
  Buy,
  Videos,
  Pictures,
} from "./Components/Index.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer rtl={true} position={"top-right"} />

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/buy" element={<Buy />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/pictures" element={<Pictures />} />
      </Routes>
      <Footer />
      <Outlet />
    </>
  );
};
export default App;
