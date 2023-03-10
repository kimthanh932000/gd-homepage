import iconStar from "assets/images/icon-star.svg";
import iconPencil from "assets/images/icon-pencial-alt.svg";
import heroImg from "assets/images/hero-image 1.png";
import "./Hero.scss";
import Button from "components/button/Button";

export default function Hero() {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-left">
					<h1 className="hero__ttl">
						Learn the art of Game Dev
						{/*Learn the art of*/}
						{/*<br/> Game Dev*/}
					</h1>
					<p className="hero__txt">
						This is a comprehensive course on Game Development.
						You will learn everything from generating an idea to
						publishing your games to different platforms.
						{/*This is a comprehensive course on Game Development.*/}
						{/*<br/> You will learn everything from generating an idea to*/}
						{/*<br/> publishing your games to different platforms.*/}
					</p>
					<Button classes={`hero__btn`} img={{src: iconPencil, alt: 'pencil', classes: 'icon-pencil'}}>Enrol Now</Button>
				</div>
				<div className="hero-right">
					<div className="hero__achievement">
						<div className="content">
							<span className="heading">32K</span>
							<span>Students Enrolled</span>
						</div>
						<div className="bg"></div>
					</div>
					<div className="hero__achievement">
						<div className="content">
							<span className="heading">4.7<img className="icon-star" src={iconStar} alt="icon-star"/></span>
							<span>Overall Rating</span>
						</div>
						<div className="bg"></div>
					</div>
					<img className="hero__img" src={heroImg} alt="hero"/>
				</div>
			</div>
		</section>
	);
}
