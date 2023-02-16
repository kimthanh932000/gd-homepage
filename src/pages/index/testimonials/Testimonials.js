import React from 'react';
import testimonialJane from 'assets/images/testimonial-jane.png';
import testimonialJacob from 'assets/images/testimonial-jacob.png';
import './Testimonials.scss';
import Button from "components/button/Button";
import iconPencil from "assets/images/icon-pencial-alt.svg";

function Testimonials() {
	return (
		<section className="testimonial">
			<div className="container wrapper">
				<div className="testimonial-left">
					<div className="testimonial-card">
						<div className="testimonial-card-top">
							<p className="testimonial-card__ttl">
								This is a great course. It helped me a lot.<br/> Thank you :)
							</p>
						</div>
						<div className="testimonial-card-bottom">
							<div className="left">
								<span className="testimonial-card__name">Jane Cooper</span>
								<span className="testimonial-card__job">Developer, Sony</span>
							</div>
							<div className="right testimonial-card__photo-box">
								<img src={testimonialJane} alt="Jane Cooper" className="testimonial__photo"/>
							</div>
						</div>
					</div>
					<div className="testimonial-card">
						<div className="testimonial-card-top">
							<p className="testimonial-card__ttl">
								Amazing Work! Well done!
							</p>
						</div>
						<div className="testimonial-card-bottom">
							<div className="left">
								<span className="testimonial-card__name">Jacob Jones</span>
								<span className="testimonial-card__job">Designer, Facebook</span>
							</div>
							<div className="right testimonial-card__photo-box">
								<img src={testimonialJacob} alt="Jacob Jones" className="testimonial__photo"/>
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<h2 className="testimonial__ttl">
						What our students<br/> say
					</h2>
					<p className="testimonial__txt">
						All students get access to all the videos and also the source code of<br/> the projects.<br/>
						You will also have access to a private Discord channel where you can<br/> discuss your doubts.
					</p>
					<Button classes={`testimonial__btn`}>Learn More</Button>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
