import React from 'react';

import image4 from '../Assets/image4.jpg';
import merco from '../Assets/amg.png';
import audi from '../Assets/audi.png';
import renault from '../Assets/renault.jpg';
import vol from '../Assets/vol.png';
import pg from '../Assets/pg.png';
import camion from '../Assets/image.png';

import tree from '../Assets/3.jpg';
import '../navbar/navbar.css';
import { FaEarthAfrica } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import Menu from '../menu/menu.jsx';

import { RiCustomerService2Line } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Navbar() {
	return (
		<body>
			<div className='flayer'>
				<h1>LOUEZ DES VOITURE HAUT DE GAMME ! </h1>
				<h5>Location de voitures premium au meilleur prix. Dans le monde entier.</h5>
			</div>
			<div className='columns'>
				<div className='column column-reverse'>

					<figure>< img className='column__item' src={merco} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={audi} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={renault} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={vol} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={pg} alt='' width={100} /></figure>
				</div>




				<div className='column'>
					<figure>< img className='column__item' src={merco} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={audi} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={renault} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={vol} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={pg} alt='' width={100} /></figure>
				</div>
				<div className='column column-reverse'>

					<figure>< img className='column__item' src={merco} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={audi} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={renault} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={vol} alt='' width={150} /></figure>
					<figure>< img className='column__item' src={pg} alt='' width={100} /></figure>
				</div>


			</div>

			<div className='Service'>
				<h1>NOS SERVISES 4M </h1>
			</div>
			<div className='container-service'>
				<div>

					<h6 className='container-fluid-service'><FaEarthAfrica size={30} />Portée mondiale</h6>
					<p>Plus de 2 000 stations 4M  <br /> dans plus de 105 pays</p>
				</div>


				<div>

					<h6 className='container-fluid-service'><FaCar size={30} />Flotte unique</h6>
					<p>Des cabriolets haut de <br /> gamme aux SUV premium</p>
				</div>
				<div>

					<h6 className='container-fluid-service'><RiCustomerService2Line size={30} />Service exceptionnel</h6>
					<p>Sans stress, fiable,<br /> sans coûts cachés</p>
				</div>
			</div>


			<div className='fluid'>

				<img className='image4' src={image4} alt="" width={300} />
				<div className='fluid-container'>

					<h2> ABONNEMENT DE VOITURE 4M  </h2>
					<p>L'abonnement de voiture SIXT+ est une alternative flexible à l'achat ou au leasing d'une voiture. Vous pouvez choisir en ligne le véhicule de votre choix parmi les modèles les plus récents, de la compacte jusqu'aux véhicules haut de gamme. Contrairement à l'achat ou au leasing d'une voiture, vous pouvez résilier votre abonnement à tout moment à la fin du cycle de 30 jours, sans engagement à long terme ni autre obligation. En dehors du prix fixe mensuel et des frais de carburant, il n'y a pas de frais</p>

					<button className='btn_abo'>CHOISIR MA VOITURE</button>
				</div>
			</div>
			<div className='fluid2'>

				<img className='image5' src={camion} alt="" width={300} />
				<div className='fluid-container'>

					<h2> LOCATION D'UTILITAIRES POUR LES ENTREPRISES  </h2>
					<p>Location d'utilitaires pour les entreprises</p>

					<button className='btn_abo'>CHOISIR MA VOITURE</button>
				</div>
			</div>
			<div className='carusel'>



				<Carousel>
					<div className='tt'>
						<img className='tt-img' src={tree} alt="" />
						<h3>Super agence de location de voiture avec un service client très professionnel. J’ai déjà loué deux fois ici et suis très satisfaite, les agents sont compréhensifs et accommodants. Je recommande !
							<h5>— Loraine, New York</h5></h3>
					</div>
					<div className='tt'>
						<img className='tt-img' src={tree} alt="" />
						<h3>Accueil et personnel parfait. Nous avons eu une voiture de gamme supérieure à celle réservée, elle était propre et en très bon état. Je recommande à 100% !
							<h5>— Guillaume, Munich</h5></h3>
					</div>

					<div className='tt'>
						<img className='tt-img' src={tree} alt="" />
						<h3>Excellent accueil, proposition d’autres modèles moyennant supplément mais qui donne le choix. Véhicule de qualité et propre. Ravi d’avoir loué chez eux.
							<h5>— Guillaume, Paris</h5></h3>
					</div>
				</Carousel>
			</div>
			<Menu/> 
		</body>
	);
}

export default Navbar;