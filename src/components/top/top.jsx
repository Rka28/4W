import React from 'react';
import '../top/top.css';
import video1 from '../Assets/video1.mp4';
import img1 from '../Assets/image1.png'
import Navbar from '../navbar/navbar.jsx';

function Top() {
	return (
		<body>
		
		<div className='video'>
			
	<video  className ='video'src={video1} autoPlay loop>
		</video>
		</div>
		<div className='container'>
		<h1 className='logo'>4M</h1>
		<ul className='navbar'>
			<li >Home</li>
			<li >Home</li>
			<li >Home</li>
			<li >Home</li>
		</ul>
		<img className='img1' src={img1} alt="" />

		</div>
	
<Navbar/> 
	</body>
  );
}

export default Top;