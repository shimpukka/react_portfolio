import React, { Component } from 'react';
import HeroRow from './HeroRow';
import PortfolioRow from "./PortfolioRow";
import About from "./About"
import Contact from "./Contact";
import { projects } from "./projects";




class Page extends Component {
	render(){

		return(
			<div>
			<HeroRow/>
			<About />
			<h2 className="f2 tc bt w-80 pt4 mh7 dark-blue center " style={{fontFamily:"Code_Pro_Demo"}}> - Portfolio - </h2>
			<PortfolioRow projects={projects}/>
			<Contact />
			</div> 
		);

	}
}

export default Page;