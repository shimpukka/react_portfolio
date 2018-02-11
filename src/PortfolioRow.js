import React from 'react';
import Portfolio from "./Portfolio";


const PortfolioRow = ({projects}) => {


	return (
			
			<div className="flex-l flex-row-l flex-row-wrap-l mb5" id="portfolio">
		
			{
				projects.map((item,i) => {
					return	<Portfolio 
								key = {i}
								id={projects[i].id} 
								name={projects[i].name} 
								description={projects[i].description} 
								img={projects[i].img} 
								link={projects[i].link}
								/>
	
				})
			}

			</div>
		);
}

export default PortfolioRow;