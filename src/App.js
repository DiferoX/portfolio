import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ProjectList from './components/ProjectList';


const projects =
[
  {
    id: uuidv4(), 
    name: "Memory-Card",
    page: 'https://diferox.github.io/memory-card/',
    code: 'https://github.com/DiferoX/memory-card',
  },
  {
    id: uuidv4(), 
    name: "Battleship",
    page: 'https://diferox.github.io/Battleship/',
    code: 'https://github.com/DiferoX/Battleship',
  },
  {
    id: uuidv4(), 
    name: "Weather-App",
    page: 'https://diferox.github.io/Weather-App/',
    code: 'https://github.com/DiferoX/Weather-App',
  },
  {
    id: uuidv4(), 
    name: "Admin-Dashboard",
    page: 'https://diferox.github.io/admin-dashboard/',
    code: 'https://github.com/DiferoX/admin-dashboard',
  },
  {
    id: uuidv4(), 
    name: "Restaurant",
    page: 'https://diferox.github.io/Restaurant/',
    code: 'https://github.com/DiferoX/Restaurant',
  },
  {
    id: uuidv4(), 
    name: "Calculator",
    page: 'https://diferox.github.io/calculator/',
    code: 'https://github.com/DiferoX/calculator',
  },
  {
    id: uuidv4(), 
    name: "Library",
    page: 'https://diferox.github.io/library/',
    code: 'https://github.com/DiferoX/library',
  },
  {
    id: uuidv4(), 
    name: "sign-up-form",
    page: 'https://diferox.github.io/sign-up-form/',
    code: 'https://github.com/DiferoX/sign-up-form',
  },
  {
    id: uuidv4(), 
    name: "Tic-Tac-Toe",
    page: 'https://diferox.github.io/Tic-Tac-Toe/',
    code: 'https://github.com/DiferoX/Tic-Tac-Toe',
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
