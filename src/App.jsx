import Home from './pages/home/Home'
import About from './pages/about/About';
import HouseShow from './pages/house-show/HouseShow'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page404 from './pages/error/404';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/accomodation/:id',
		element: <HouseShow />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '*',
		element: <Page404 />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;