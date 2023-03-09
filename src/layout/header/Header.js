import logo from "assets/images/logo.png";
import "./Header.scss";
import Button from 'components/button/Button';
import {useEffect, useState} from "react";
import {useMediaQuery} from 'react-responsive';

export default function Header() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const isMobile = useMediaQuery({maxWidth: 768});

	useEffect(() => {
		if (!isMobile) {
			setOpenMobileMenu(false);
		}
	}, [isMobile]);

	return (
		<header className="l-header">
			<div className="container">
				<div className="p-logo">
					<img className="p-logo__img" src={logo} alt="logo"/>
				</div>
				<nav className="p-nav">
					<ul className={`p-nav-list ${(openMobileMenu) ? 'p-nav-list-mobile' : ''}`}>
						<li className="p-nav__item">
							<a href="#" className="p-nav__link">
								About
							</a>
						</li>
						<li className="p-nav__item">
							<a href="#" className="p-nav__link">
								Services
							</a>
						</li>
						<li className="p-nav__item">
							<a href="#" className="p-nav__link">
								Our Work
							</a>
						</li>
						<li className="p-nav__item">
							<a href="#" className="p-nav__link">
								<Button classes={`p-nav__btn cursor-pointer`}>Enroll Now</Button>
							</a>
						</li>
					</ul>
				</nav>
				{
					isMobile &&
					<>
						<div className={`${openMobileMenu ? 'background' : 'd-none'}`}></div>
						<button className={`p-hamburger cursor-pointer ${openMobileMenu ? 'p-hamburger--active' : ''}`} onClick={() => setOpenMobileMenu(!openMobileMenu)}>
							<span className={`p-hamburger__line`}></span>
							<span className={`p-hamburger__line`}></span>
						</button>
					</>
				}
			</div>
		</header>
	);
}
