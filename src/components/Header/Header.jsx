import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo_dark.svg';
import logoLight from '../../assets/img/logo_light.svg';
import './header.scss';
import youtube from '../../assets/img/youtube.svg';
import instagram from '../../assets/img/instagram.svg';
import wk from '../../assets/img/vk.svg';
import whatsapp from '../../assets/img/whatsapp.svg';
import telegram from '../../assets/img/telegram.svg';
import burger from '../../assets/img/icon_burger.svg';

export const Header = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setIsSticky(window.scrollY > 100);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={
				isSticky
					? `site-header site-fixed fixed-color d-flex align-items-center justify-content-between`
					: `site-header site-fixed  d-flex align-items-center justify-content-between`
			}
		>
			<div className='d-flex align-items-center gap-5'>
				<div className='navbar-brand'>
					<img className='logo-img' src={isSticky ? logoLight : logo} alt='' />
				</div>
				<a className='header-catalog' href='#'>
					Каталог
				</a>
			</div>

			<ul className='nav-list'>
				<li>
					<a className='nav-links' href='#'>
						Частые вопросы
					</a>
				</li>
				<li>
					<a className='nav-links' href='#'>
						Сотрудничество
					</a>
				</li>
			</ul>

			<ul className='social-list'>
				<li>
					<a
						className='d-flex gap-2 align-items-center nav-links'
						href='tell:+998919104910'
					>
						<i class='fa-sharp fa-solid fa-phone'></i>{' '}
						<span className='header-phone-none'>+998919104910</span>
					</a>
				</li>
				<li>
					<i class='fa-regular fa-heart heart-links'></i>
				</li>
				<li>
					<a className='d-flex gap-2 align-items-center nav-links' href='#'>
						<i class='fa-solid fa-magnifying-glass'></i>{' '}
						<span className='header-search-none'>Поиск по названию</span>
					</a>
				</li>
				<li className='toggle-bar'>
					<a
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasRight'
						aria-controls='offcanvasRight'
					>
						<img src={burger} alt='' />
					</a>

					<div
						className='offcanvas offcanvas-end'
						tabIndex={-1}
						id='offcanvasRight'
						aria-labelledby='offcanvasRightLabel'
					>
						<div className='offcanvas-header'>
							<div className='navbar-brand'>
								<img className='logo-img' src={isSticky ? logoLight : logo} alt='' />
							</div>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							/>
						</div>
						<div className='offcanvas-body'>
							<ul className='off-nav-list'>
								<li>
									<a className='off-nav-links' href='#'>
										Частые вопросы
									</a>
								</li>
								<li>
									<a className='off-nav-links' href='#'>
										Сотрудничество
									</a>
								</li>
								<li className='text-center mt-4'>
									<a
										style={{ display: 'flex', justifyContent: 'center' }}
										className='d-flex gap-2 align-items-center nav-links'
										href='tell:+998919104910'
									>
										<i class='fa-sharp fa-solid fa-phone'></i>{' '}
										<span className='header-phone'>+998919104910</span>
									</a>
								</li>
							</ul>

							<div className='off-hero-icons'>
								<a href='#' target='_blank'>
									<img src={youtube} alt='' />
								</a>
								<a
									href='http://instagram.com/khusanov_o2'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={instagram} alt='' />
								</a>
								<a href='#' target='_blank'>
									<img src={wk} alt='' />
								</a>
								<a href='#' target='_blank'>
									<img src={whatsapp} alt='' />
								</a>
								<a
									href='http://t.me/khusanov_o2'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={telegram} alt='' />
								</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</header>
	);
};
