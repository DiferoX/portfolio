import '../styles/MenuBar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function MenuBar() {
  return (
    <div className='menuBarContent'>
      <div>
        <h4>Diego Ruiz (@DiferoX)</h4>
      </div>
      <div className='menuBarBtns'>
        <a href="https://github.com/DiferoX" target="_blank" rel="noopener noreferrer">
          <FaGithub className='iconMenuBar' />
        </a>
        <a href="https://www.linkedin.com/in/diferox" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='iconMenuBar' />
        </a>
      </div>
    </div>
  );
}

export default MenuBar;
