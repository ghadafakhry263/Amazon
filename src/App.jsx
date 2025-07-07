
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Store from './Component/Store'
import About from './Component/About'
import Navbars from './Component/Navbar'
import { Container } from 'react-bootstrap'
import ShoppingCard from './Component/Context/ShoppingCard'
function App() {
  return (
  
   <ShoppingCard>
 <Navbars />
     <Container className="mb-4">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/store" element={<Store />} />
<Route path="/about" element={<About />} />
</Routes>
    </Container>
 
   </ShoppingCard>
   
    
        
   
  )
}

export default App
