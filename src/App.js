import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';


const projects =
[
  {
    id: uuidv4(), 
    name: "Shopping Cart",
    page: 'https://diferox.github.io/shopping-cart/',
    code: 'https://github.com/DiferoX/shopping-cart',
    skills: 
    [
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiReact className='iconSkill react' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Memory-Card",
    page: 'https://diferox.github.io/memory-card/',
    code: 'https://github.com/DiferoX/memory-card',
    skills: 
    [
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiReact className='iconSkill react' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "CV-Maker",
    page: 'https://diferox.github.io/cv-project/',
    code: 'https://github.com/DiferoX/cv-project',
    skills: 
    [
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiReact className='iconSkill react' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Battleship",
    page: 'https://diferox.github.io/Battleship/',
    code: 'https://github.com/DiferoX/Battleship',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Weather-App",
    page: 'https://diferox.github.io/Weather-App/',
    code: 'https://github.com/DiferoX/Weather-App',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Admin-Dashboard",
    page: 'https://diferox.github.io/admin-dashboard/',
    code: 'https://github.com/DiferoX/admin-dashboard',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Restaurant",
    page: 'https://diferox.github.io/Restaurant/',
    code: 'https://github.com/DiferoX/Restaurant',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Calculator",
    page: 'https://diferox.github.io/calculator/',
    code: 'https://github.com/DiferoX/calculator',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Library",
    page: 'https://diferox.github.io/library/',
    code: 'https://github.com/DiferoX/library',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "sign-up-form",
    page: 'https://diferox.github.io/sign-up-form/',
    code: 'https://github.com/DiferoX/sign-up-form',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Tic-Tac-Toe",
    page: 'https://diferox.github.io/Tic-Tac-Toe/',
    code: 'https://github.com/DiferoX/Tic-Tac-Toe',
    skills: 
    [
      { id: uuidv4(), skill: <SiHtml5 className='iconSkill html' /> },
      { id: uuidv4(), skill: <SiCss3 className='iconSkill css' /> },
      { id: uuidv4(), skill: <SiJavascript className='iconSkill javascript' /> },
    ]
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
