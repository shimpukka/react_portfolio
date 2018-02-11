import React from 'react';


const Portfolio = (props) => {

		return(
		
			<div className="w-20-l w-90-m w-90-ns center " id="card">
				
				<a target="_blank" href= {props.link}>
					<img src= {props.img} alt ={props.name} className="grow mt3 ba b--black-10"/>
				</a>
				<p className="ph4-ns"> {props.description}</p>

			</div>
		);
}


export default Portfolio;