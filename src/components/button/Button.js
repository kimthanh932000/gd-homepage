import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({children, classes, img = null}) {
	return (
		<button className={`${classes}`}>
			{
				img && <img src={img.src} alt={img.alt} className={img.classes}/>
			}
			{children}
		</button>
	);
}

Button.propTypes = {

};

export default Button;
