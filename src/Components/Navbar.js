import './Nav.css'
import { useRef,useState } from "react";
import React from 'react';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const [color, changeColor] = useState("#282c34");

	return (
		<>
			<header>
			<nav ><Link to="/"><h3>LOGO</h3></Link></nav>
				<nav ref={navRef}>
				<Link to="/Redux" onClick={() => changeColor("#9c27b0")}><a>Redux</a></Link>
				<Link to="/shop"><a>Shop</a></Link>
				<Link to="/projects"><a>Projects</a></Link>
				<button className='contactbtn'>Login</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</>
	);
}

export default Navbar;
