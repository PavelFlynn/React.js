//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, NotFound } from './components';

export default function App() {
	//const [count, setCount] = useState(0)

	return (
		<BrowserRouter>

			<Routes>
				<Route path='/' exact element={ <Layout /> } />
				<Route path='*' element={ <NotFound /> } />
			</Routes>

		</BrowserRouter>
	)
}
