import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ProjectList from './components/ProjectList';


const projects =
[
  {
    id: uuidv4(), 
    name: "Battleship",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "Weather-App",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "Admin-Dashboard",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "Restaurant",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "Calculator",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "Library",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "sign-up-form",
    page: null,
    code: null,
  },
  {
    id: uuidv4(), 
    name: "Tic-Tac-Toe",
    page: null,
    code: null,
  },
]

function App() 
{
  return (
    <div className="App">
      <Header />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
