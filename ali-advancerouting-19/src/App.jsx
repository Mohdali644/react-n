import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        {/* use (:id) to get into the page like /courses/coursedetail to get into coursedetail */}

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      {/* Note: to perform routing u need to run this command in the terminal
       (npm i react-router-dom) */}

      {/* and next step is to add (<BrowserRouter/>) in main.jsx file and add import also 
          import {BrowserRouter} from 'react-router-dom' */}
    </div>
  );
};

export default App;
