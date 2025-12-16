
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import SinglePage from "./pages/SinglePage"
import CreatePage from "./pages/CreatePage"


function App() {
    return(<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/single-book/:id" element={<SinglePage />} />
      <Route path="/create-book" element={<CreatePage/>}/>
    </Routes>
    </BrowserRouter>
    
  )
  

    

  
}

export default App
