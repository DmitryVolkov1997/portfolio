import HomePage from 'pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	)
}

export default App
