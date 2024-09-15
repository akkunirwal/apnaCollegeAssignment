import React from 'react'
import CustomAccordion from './CustomAccordion';
import NavBar from './NavBar';
import './AlphaDSASheet.css'
import AnimateText from '../Common/AnimateText';

export default function AlphaDSASheet({ setIsLoggedIn }) {
	return (
		<>
			<NavBar setIsLoggedIn={setIsLoggedIn} />
			<h2 className='alpha-Dsa-heading'>
				<AnimateText lines={["Alpha-DSA Sheet", "Learn DSA Concepts", "Practice Questions"]} />
			</h2>
			<CustomAccordion />
		</>
	)
}
