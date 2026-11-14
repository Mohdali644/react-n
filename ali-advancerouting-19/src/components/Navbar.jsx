import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-6 px-8 bg-cyan-900 justify-between">
      <h2 className="text-xl font-semibold">Apple</h2>
      <div className="flex gap-8">

        {/* we can u se a tag also here the a tag and link tag are almost the same things but 
         the thing is in link tag page does not reload visually but internally */}
        <Link className="text-xl font-semibold" to="/">
          Home
        </Link>
        <Link className="text-xl font-semibold" to="/about">
          About
        </Link>
        <Link className="text-xl font-semibold" to="/contact">
          Contact
        </Link>
        <Link className="text-xl font-semibold" to="/courses">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
