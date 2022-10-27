import '../styles/Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Project(props) 
{
  return (
    <div className='projectContent'>
      <a href="https://www.theodinproject.com/dashboard" target="_blank" rel="noopener noreferrer">
        <img 
            className='cardImg' 
            src={require(`../images/${props.project.name}.jpg`)}
            alt={`${props.project.name} Card`}
        />
      </a>
      <h2>{props.project.name}</h2>
      <div>
        <a href="https://www.theodinproject.com/dashboard" target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className='icon' />
        </a>
        <a href="https://www.theodinproject.com/dashboard" target="_blank" rel="noopener noreferrer">
          <FaGithub className='icon' />
        </a>
      </div>
    </div>
  );
}

export default Project;
