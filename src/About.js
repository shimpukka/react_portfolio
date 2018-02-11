
import React from 'react';



const About = () => {


		return(

			<div className=" tc center mt4 mb5 w-70-l w-90-m" id="about">
		      	<h2 className="f2 dark-blue" style={{fontFamily:"Code_Pro_Demo"}}> - About me -</h2>
		        <p className="fw1 f4 mh5"> 
		        Hi! I'm a novice web developer from <span className="dark-blue b">Japan</span>. 
		        I started to learn web development about a year ago and found it really <span className="dark-blue b"> interesting and fun.</span> 
		        Through study of web development I realized my passion in <span className="dark-blue b">solving algorithmic problems </span>and interest in designing. </p>
		        
		        <p className="f4 mb5">Other interest: <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/gp/76347334@N03/iEJbU8" className="link black-90 hover-yellow"><i className="fa fa-camera-retro black ml3" aria-hidden="true"></i> photography</a>, all kinds of sports </p>
		       
		        
		        

		        <div className="flex-l flex-row-l justify-center-l content-start-l ">
			    	
			    	<div className="w-50-l tc mr4-l pr2">					    
					    	<p className="f3 mb1 dark-blue" style={{fontFamily:"Code_Pro_Demo"}}> Skills: </p>
			                <p className="f4 mb1"><b>Intermediate:</b> HTML, CSS, JavaScript (incl. ES6), jQuery, Bootstrap</p>
			                <p className="f4"><b>Basic:</b> React, Git, C, Processing, Scratch, responsive design</p>
			       	
			    	</div>

			     	<div className="w-50-l center tc ">  	

			            	<p className="f3 mb1 dark-blue mt5-m" style={{fontFamily:"Code_Pro_Demo"}}> Educational background: </p>
			                <p className="f4 mb1">Master programme at Faculty of Science,University of Oulu (2015-now)</p>
			              
			                <p className="f4">Bachelor of science,Tohoku University (2008-2012) </p>
						            
	           	 	</div>
	            </div>
		        
		     </div>
			 
			
		);



	}


export default About;