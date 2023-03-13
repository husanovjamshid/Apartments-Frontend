import React from 'react';
import './footer.scss';
import footer_logo from '../../assets/img/logo_dark.svg';

export const Footer = () => {
	return (
		<div className='footer-page'>
			<div className='containers'>
				<div className='footer'>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
							<div className='logo-wrap'>
								<img width='180px' src={footer_logo} alt='' />
								<div className='logo-text'>
									<p>Политика конфиденциальности</p>
									<p>Согласие на обработку персональных данных</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
							<h3 className='footer-catalog'>Каталог</h3>
							<ul className='footer-catalog-list'>
								<li className='footer-catalog-item'>
									<a href='#'>С бассейном</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>Семейные и уютные</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>Хиты продаж</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>Под свадьбы и корпоративы</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>С русской баней на дровах</a>
								</li>
							</ul>
						</div>
						<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
							<p>Сотрудничество</p>
							<p>Частые вопросы</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
