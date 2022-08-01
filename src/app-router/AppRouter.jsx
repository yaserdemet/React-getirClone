import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "../app-router/PrivateRouter";
import Details from "../pages/Details";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
