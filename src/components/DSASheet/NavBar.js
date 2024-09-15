import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AlphaDSASheet.css'

export default function NavBar({ setIsLoggedIn }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		setIsLoggedIn(false); // Reset login state
		navigate('/');        // Redirect to the login page
	};

	return (
		<nav className="navbar py-3 nav-border sticky-top bg-light">
			<ul className="nav d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
				<li className="nav-item">
					<img
						src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6efdd5e7f0d663cf231d0f2040be0a1e.png"
						alt="Logo"
						className='nav-icon'
					/>
				</li>
				<li>
					<a className="nav-link" aria-current="page" href="/">
						Home
					</a>
				</li>
				<li>
					<a className="nav-link" href="/">
						New Courses
					</a>
				</li>
				<li>
					<a className="nav-link active" href="/">
						DSA Sheet
					</a>
				</li>

				<li className=" ms-auto pe-4">
					<button className="btn btn-danger" onClick={handleLogout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	);
}
