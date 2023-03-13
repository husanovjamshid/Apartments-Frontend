import React from 'react';
import { About } from './About/About';
import { FamousCatalog } from './FamousCatalog/FamousCatalog';
import { HomeBanner } from './HomeBanner/HomeBanner';

export const Home = () => {
	return (
		<div className='home-page'>
			<HomeBanner />
			<About />
			<FamousCatalog />
		</div>
	);
};
