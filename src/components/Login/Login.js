import { useState } from 'react';
import './Login.css';

export default function Login({ setIsLoggedIn }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin() {
		// Basic validation
		if (email && password) {
			setIsLoggedIn(true);
		} else {
			alert('Please enter both email and password.');
		}
	}

	return (
		<section className="vh-100 gradient-custom">
			<div className="container py-3 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card text-black blurred-card">
							<div className="px-4 text-center">
								<img
									src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6efdd5e7f0d663cf231d0f2040be0a1e.png"
									className="imgPosition img-fluid"
									alt="apna college icon"
								/>
								<div className='mb-4'>
									<p className="text-dark mb-3 mt-3">Login to start learning</p>

									<div className="form-outline mb-4">
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Email"
											className="form-control form-control-lg"
										/>
									</div>

									<div className="form-outline mb-4">
										<input
											type="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Password"
											className="form-control form-control-lg"
										/>
									</div>

									{/* Forgot Password */}
									<p className="small mb-4 pb-lg-2">
										<a className="text-dark" href="#!">Forgot password?</a>
									</p>

									<button className="btn btn-dark btn-lg px-5" type="submit" onClick={handleLogin}>
										Login
									</button>

									{/* Social Media Icons */}
									<div className="d-flex justify-content-center text-center mt-4 pt-1">
										<a href="#!" className="text-black">
											<i className="fab fa-facebook-f fa-lg"></i>
										</a>
										<a href="#!" className="text-black">
											<i className="fab fa-twitter fa-lg mx-4 px-2"></i>
										</a>
										<a href="#!" className="text-black">
											<i className="fab fa-google fa-lg"></i>
										</a>
									</div>
								</div>

								<div>
									<p className="mb-0">
										Don't have an account? <a href="#!" className="text-black-50 fw-bold">Sign Up</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
