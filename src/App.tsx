import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/provider/Home'
import About from './pages/provider/About'
import NotFound from './components/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
