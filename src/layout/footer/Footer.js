import './Footer.scss';
import iconFb from 'assets/images/icon-fb.svg';
import iconInsta from 'assets/images/icon-insta.svg';

export default function Footer() {
	return (
		<footer className="l-footer">
			<div className="container wrapper">
				<div className="content">
					<div className="nav">
						<h3 className="nav__heading fw-700">Quick Links</h3>
						<ul className="nav-list">
							<li className="nav__item">
								<a href="#" className="nav__link">About Us</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">Contact Us</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">Privacy Policy</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">Terms & Conditions</a>
							</li>
						</ul>
					</div>
					<div className="nav">
						<h3 className="nav__heading fw-700">Course</h3>
						<ul className="nav-list">
							<li className="nav__item">
								<a href="#" className="nav__link">Log In</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">Download</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">All Courses</a>
							</li>
						</ul>
					</div>
					<div className="nav">
						<h3 className="nav__heading fw-700">
							Contact us
						</h3>
						<ul className="nav-list">
							<li className="nav__item">
								<a href="#" className="nav__link">contact@email.com</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">
									<img src={iconFb} alt="facebook" width={24} height={24}/>
								</a>
								<a href="#" className="nav__link">
									<img src={iconInsta} alt="instagram" width={24} height={24}/>
								</a>
							</li>
							<li className="nav__item">
								<form action="#" className="form">
									<div className="form-group">
										<input className="form__input" type="text" placeholder="Email Address"/>
										<button className="form__btn" type="submit">Subscribe</button>
									</div>
								</form>
							</li>
						</ul>
					</div>
				</div>
				<p className="copyright">This website is developed by GTCoding © 2021</p>
			</div>
		</footer>
	);
}
