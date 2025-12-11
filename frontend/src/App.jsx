
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import CreateBookPage from './pages/CreateBookPage'
import SingleBookPage from './pages/SingleBookPage'
import EditBookPage from './pages/EditBookPage'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutUsPage/>}/>
        <Route path='/create-book' element={<CreateBookPage/>}/>
        <Route path='/single-book' element={<SingleBookPage/>}/>
        <Route path='/edit-book' element={<EditBookPage />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        {/* Add more routes as needed */}

        
        
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
