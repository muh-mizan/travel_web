import './App.css'
import Destination from './Components/Destinations/Destination'
import Footer from './Components/Footer/Footer'
import Hotels from './Components/Hotels/Hotels'
import Header from './Components/Nav/Header/Header'
import Nav from './Components/Nav/Nav'
import Testimonial from './Components/Testimonials/Testimonial'


function App() {

  return (
<>
   <div className="header_container">
    <Nav/>
    <Header/>
   </div>
   <Destination/>
   <Hotels/>
   <Testimonial/>
<Footer/>
   
</>
  )
}

export default App
