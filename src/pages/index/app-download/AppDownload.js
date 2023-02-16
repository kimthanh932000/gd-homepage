import React from 'react';
import './AppDownload.scss';
import iconApple from 'assets/images/icon-apple-store.svg';
import iconGoogle from 'assets/images/icon-google-store.svg';

function AppDownload() {
	return (
		<section className="app">
			<div className="container wrapper">
				<h2 className="app__ttl">Get our App</h2>
				<p className="app__txt">You can use our App for better experience on smartphones</p>
				<div className="app-download">
					<a className="app__link" href="#">
						<img src={iconApple} alt="apple" width={60} height={60}/>
						App Store
					</a>
					<a className="app__link" href="#">
						<img src={iconGoogle} alt="google" width={60} height={60}/>
						Google Play
					</a>
				</div>
			</div>
		</section>
	);
}

export default AppDownload;
