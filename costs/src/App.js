import {BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom'
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
//import Container from "./components/layout/Container" Implementar a aula 18

function App() {
  return (
    <Router>
      <div>
        <Link to="/">            Home</Link>
        <Link to="/contact">     Contato</Link>
        <Link to="/company">     Empresa</Link>
        <Link to="/newproject">  Novo projeto</Link>
      </div>
      <Switch>          
          <Route path="/"            element={<Home/>}/>
          <Route path="/contact"     element={<Contact/>}/>
          <Route path="/company"     element={<Company/>}/>
          <Route path="/newproject"  element={<NewProject/>}/>    
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
