//destructuring
import React from 'react';
import './HeroRow.css';


const HeroRow = (props) => {

		return(

			<header>
			 
			    <div className="pb5" id="HeroRow">

			      <nav className="dt w-100 center"> 
			        
			        <div className="dtc v-mid tr pa3">
			          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="#portfolio" >Portfolio</a> 
			          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="#about" >About</a> 
			          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="#contact" >Contact</a>
			     
			        </div>
			      </nav> 
			      <div className="tc mt4 mt5-m mt6-l w-100-m" id="title" >
			        <h1 className="f2  white-90 mb0 hover-yellow">Shiori Sasaki</h1>
			        <h2 className="fw2 f1 white-80 mt3 mb2 ph3-m ph7-l hover-yellow"> Frond-end developer</h2>
			        <p className="f4 white-80 hover-yellow">  based in Oulu, Finland </p>
			      </div>
			    </div>
			  
			</header>
			
		);



	}


export default HeroRow;