//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';

export default function App() {
	//const [count, setCount] = useState(0)

	return (
		<BrowserRouter>

			<Routes>
				<Route path='/' exact element={ <Layout /> } />
			</Routes>

		</BrowserRouter>
	)
}
