import React from "react";
import { ThumbsUp } from 'lucide-react';
import { Bookmark } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
          className="profile-img"
        />

        <div>
          <h3>John Dae</h3>
          <p>Available for work</p>
        </div>
      </div>

      <div className="right-nav">
        <button className="icon-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/><path d="M7 10v12"/></svg></button>
        <button className="icon-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg></button>
        <button className="contact-btn">Get in touch</button>
      </div>
    </div>
  );
};

export default Navbar;