import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
