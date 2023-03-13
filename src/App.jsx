import { Header } from './components/Header/Header';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

function App() {
	return (
		<div>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
