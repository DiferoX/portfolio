import '../styles/InfoBar.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';
import { FaGitAlt, FaGithub } from 'react-icons/fa';

function InfoBar() {
  return (
    <div className='infoBarContent'>
      <div className='aboutContent'>
        <h4>About</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem saepe iure fuga, recusandae molestiae facilis odit nihil architecto a soluta expedita esse tempore natus eum doloremque reiciendis aperiam consequuntur?</p>
      </div>
      <div className='skillContent'>
        <h4>Skills</h4>
        <div>
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <FaGitAlt />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
