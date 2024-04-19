
import '../menu/menu.css';
import menu1 from '../Assets/menu-mc.png';
import menu2 from '../Assets/menu1.png';
import menu3 from '../Assets/menu2.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from 'react-responsive-carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Menu() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (

		<body>
			<div className='Menu-veh'>

				<h1>NOS VEHICULES</h1>
			</div>
			<div className='flex-menu'>

				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel activeIndex={index} onSelect={handleSelect}>

									<Carousel.Item>
										{/* <ExampleCarouselImage text="Second slide" /> */}
										<Carousel.Caption>
										
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img src={menu1} alt=""  />
										{/* <ExampleCarouselImage text="Third slide" /> */}
										<img src={menu1} alt="" width={300} />
										<Carousel.Caption>
										
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								
									<img src={menu2} alt="" width={300} />
									<img src={menu3} alt="" width={300} />
								
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
			<div className='flex-menu'>

				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
			<div className='flex-menu'>

				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
			<div className='flex-menu'>

				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
			<div className='flex-menu'>

				<div className='container-menu '>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='container-menu ' id='container-menu'>
					<div className='contanair-border'>
						<div className='container-fluid'>
							<div className='rent'>
								<h5>Mercedes GLE</h5>
								<Carousel>
									<img src={menu1} alt="" width={300} />
									<img src={menu1} alt="" width={300} />
								</Carousel>
								<h6>Classe SUV</h6>
								<div className='btn-menu'>
									<button className='btn-rent'> 120€/2h</button>
									<button className='btn-rent'>En savoir plus</button>

								</div>
							</div>

						</div>
					</div>
				</div>

			</div>

		</body>


	);


}

export default Menu;