import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Projects from "./components/pages/Projects"
//import Container from "./components/layout/Container" Implementar a aula 18

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>          
          <Route path="/"            element={<Home/>}/>
          <Route path="/projects"    element={<Projects/>}/>
          <Route path="/company"     element={<Company/>}/>          
          <Route path="/newproject"  element={<NewProject/>}/> 
          <Route path="/contact"     element={<Contact/>}/>   
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
