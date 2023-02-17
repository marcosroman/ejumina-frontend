import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../views/Main';
import Bouncer from '../views/Bouncer';
//import Rrpp from '../views/Rrpp';

const AppRoutes = () => {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/bouncer" element=<Bouncer /> />
				</Routes>
			</BrowserRouter>
	);
}

					//<Route path="/rrpp" element=<Rrpp /> />
export default AppRoutes;
