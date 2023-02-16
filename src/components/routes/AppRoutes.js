import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../views/Main';
import Bouncer from '../components/views/Bouncer';
import Rrpp from '../components/views/Rrpp';

const AppRoutes = () => {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/rrpp-view" element=<Rrpp /> />
					<Route path="/bouncer-view" element=<Bouncer /> />
				</Routes>
			</BrowserRouter>
	);
}

export default AppRoutes;
