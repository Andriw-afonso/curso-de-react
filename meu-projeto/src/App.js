import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from "./components/SayMyName"
import Pessoa from "./components/Pessoa"
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  const name = 'Mateus'
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  const nome = "Maria"

  return (
    <div className="App">
     <h1>Olá React</h1>
     <p>Meu primeiro App</p>
     <p>Olá {name}</p>
     <p>Olá {newName}</p>
     <p>Soma : {sum(1,2)}</p>
     <img src={url} alt='Minha Imagem'/>
     <HelloWorld/>  
     <SayMyName nome ="Matheus"/>  
     <SayMyName nome = "João" />
     <SayMyName nome = {nome}/>
     <Pessoa
        nome = "Rodrigo"
        idade = "28"
        profissao = "Programador"
        foto = "https://via.placeholder.com/150"
        
     />
     <Frase/>
     <Frase/>
     <List/>
    <h1>Testando eventos</h1>
    <Evento numero={3}/>
    <Form/>
    </div>
  );
}

export default App;
