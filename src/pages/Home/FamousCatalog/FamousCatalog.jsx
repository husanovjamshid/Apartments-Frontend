import React from 'react';
import './famous.scss';
import heart from '../../../assets/img/heart.svg';
import bed from '../../../assets/img/icon_bed.svg';
import entertaiment from '../../../assets/img/icon_entertainment.svg';
import stroke from '../../../assets/img/icon-stroke.svg';
import basseyn from '../../../assets/img/icon_waterpool.svg';
import people from '../../../assets/img/people.svg';

export const FamousCatalog = () => {
	return (
		<div className='famous-category'>
			<div className='containers'>
				<h3 className='famous-title'>Популярное в каталоге</h3>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='catalog-card'>
							<div className='position-relative'>
								<img
									src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp'
									className='card-img-top'
									alt='Fissure in Sandstone'
								/>
								<div className='favorite'>
									<img src={heart} alt='' />
								</div>
								<div className='number-of-poeple'>
									<img src={people} alt='' />
									до 12
								</div>
							</div>
							<div className='card-body'>
								<h5 className='card-catalog-title'>Новая сосновка</h5>{' '}
								<p className='card-catalog-text'>
									<img src={bed} alt='' /> 25 спальных мест
								</p>
								<p className='card-catalog-text'>
									<img src={entertaiment} alt='' /> Настольный теннис
								</p>
								<p className='card-catalog-text'>
									<img src={stroke} alt='' /> Бассейн
								</p>
								<p className='card-catalog-text'>
									<img src={basseyn} alt='' /> Сауна{' '}
								</p>
								<div className='d-flex align-items-center justify-content-between mt-4'>
									<p className='card-catalog-price m-0'>от 10 000 ₽ / сутки </p>
									<a className='card-catalog-link' href='#'>
										Подробнее
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='card'>
							<img
								src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp'
								className='card-img-top'
								alt='Fissure in Sandstone'
							/>
							<div className='card-body'>
								<h5 className='card-catalog-title'>Новая сосновка</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk
									of the card's content.
								</p>
								<a href='#!' className='btn btn-primary'>
									Button
								</a>
							</div>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='card'>
							<img
								src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp'
								className='card-img-top'
								alt='Fissure in Sandstone'
							/>
							<div className='card-body'>
								<h5 className='card-catalog-title'>Новая сосновка</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk
									of the card's content.
								</p>
								<a href='#!' className='btn btn-primary'>
									Button
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
