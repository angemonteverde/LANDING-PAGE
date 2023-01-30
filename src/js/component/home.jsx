import React from "react";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className= "container py-5">
		<div className="text-center">
        <Navbar/>	
		<Jumbotron/>
		<div className="row">
		<Cards  title=""/>
		<Cards title=""/>
		<Cards title=""/>
		<Cards title=""/>
		</div>
		<Footer/>
		</div>
		</div>
	)
};

export default Home;
