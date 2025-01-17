import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './Start.css';
import Loading from './Loading.js';
import Menu from './Menu.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';

const Button = ({ onClick }) => {
	return (
		<div className='sub_content'>
			<div
				className='big_button'
				onClick={onClick}>
				Click anywhere!
			</div>
		</div>
	);
};

const Start = () => {
	const [isLoading, setIsLoading] = useState(false);
	const handleButtonClick = () => {
		setIsLoading(true);
	};

	return (
		<div className='stars'>
			<div className='rotating_stars' />
			{isLoading ? (
				<Loading />
			) : (
				<>
					<MainContent />

					<Button onClick={handleButtonClick} />
				</>
			)}
		</div>
	);
};

export default Start;
