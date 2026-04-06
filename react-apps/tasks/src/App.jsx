import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './counter.jsx';
import Sumval from './sumval.jsx';
import Sumobj from './sumobj.jsx';
import Signup from './signup.jsx';
import Signin from './signin.jsx';
import Edit from './edit.jsx';
import SIGNUPUSERS from './signup_users.jsx';
import SIGNINUSER from './signin_users.jsx';
import EDITUSER from './edit_users.jsx';
import Countdown from './countdown.jsx';
import Users from './users_api.jsx';
import Weather from './weather.jsx';
import Movie from './movie.jsx';
import './ThemeToggle.css';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem('theme') === 'dark';
	});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark-theme');
			document.documentElement.classList.remove('light-theme');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.add('light-theme');
			document.documentElement.classList.remove('dark-theme');
			localStorage.setItem('theme', 'light');
		}
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode(prev => !prev);
	};

	return (
		<>
			<nav>
				<Link to="/counter">Counter</Link> |{" "}
				<Link to="/sumval">Sumval</Link> |{" "}
				<Link to="/sumobj">Sumobj</Link> | {" "}
				<Link to="/signup">SignUp</Link> | {" "}
				<Link to="/signin">SignIn</Link>| {" "}
				<Link to="/edit">Edit</Link>| {" "}
				<Link to="/signupm">SIGNUP_Multiple_Users</Link>| {" "}
				<Link to="/signinm">SIGNIN_Multiple_Users</Link>| {" "}
				<Link to="/editm">EDIT_MULTIPLE_USERS</Link> |{" "}
				<Link to="/countdown">Timer</Link> |{" "}
				<Link to="/users">Users</Link> |{" "}
				<Link to="/weather">Weather</Link> |{" "}
				<Link to="/movie">Movie</Link>
			</nav>
			<div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme} style={{margin: '16px auto'}}>
				<div className="toggle-slider">
					{isDarkMode ? '🌙' : '☀️'}
				</div>
			</div>
			<Routes>
				<Route path="/counter" element={<Counter />} />
				<Route path="/sumval" element={<Sumval />} />
				<Route path="/sumobj" element={<Sumobj />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="/signupm" element={<SIGNUPUSERS />} />
				<Route path="/signinm" element={<SIGNINUSER />} />
				<Route path="/editm" element={<EDITUSER />} />
				<Route path="/countdown" element={<Countdown />} />
				<Route path='/users' element={<Users/>}/>
				<Route path='/weather' element={<Weather/>}/>
				<Route path='/movie' element={<Movie/>}/>
				<Route path="*" element={<div>Welcome! Select a page.</div>} />
			</Routes>
		</>
	);
};

export default App;
