import React from 'react';
import PropTypes from 'prop-types';
import course01 from '../../../assets/images/course-1.png';
import course02 from '../../../assets/images/course-2.png';
import iconClock from '../../../assets/images/icon-clock.svg';
import './Courses.scss';

function Courses() {
	return (
		<section className="courses">
			<div className="container wrapper">
				<h2 className="courses__ttl fw-900">Our Courses</h2>
				<div className="courses-content">
					<div className="courses-card br-24">
						<div className="courses-card__thumbnail">
							<img src={course01} alt="thumbnail"/>
						</div>
						<div className="courses-card-content">
							<h3 className="courses-card__ttl fw-900">Game Design Essentials</h3>
							<p className="courses-card__duration fw-900">
								<img src={iconClock} alt="duration" width={20} height={20}/>
								{/*<span className="fw-900">8 hrs</span>*/}
								8 hrs
							</p>
						</div>
					</div>
					<div className="courses-card br-24">
						<div className="courses-card__thumbnail">
							<img src={course02} alt="thumbnail"/>
						</div>
						<div className="courses-card-content">
							<h3 className="courses-card__ttl fw-900">Unity Game Engine Fundamentals</h3>
							<p className="courses-card__duration fw-900">
								<img src={iconClock} alt="duration" width={20} height={20}/>
								{/*<span className="fw-900">8 hrs</span>*/}
								8 hrs
							</p>
						</div>
					</div>
				</div>
				<button className="courses__btn br-24 fw-700">All Courses</button>
			</div>
		</section>
	);
}

export default Courses;
