import '../styles/InfoBar.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';
import { FaGitAlt, FaGithub } from 'react-icons/fa';

function InfoBar() {
  return (
    <div className='infoBarContent'>
      <div className='aboutContent'>
        <h4>About</h4>
        <h5>Hi, I'm Diego,</h5>
        <p>I am a Front-End Web Developer. I love to take on new projects that challenge my technological and analytics capacities. I am passionate about the creation of aplications and interactives website experiences, by using tools like Javascript, React, HTML, CSS, Git, GitHub, among others.</p>
      </div>
      <div className='skillContent'>
        <h4>Skills</h4>
        <div>
          <SiHtml5 className='iconSkills' />
          <SiCss3 className='iconSkills' />
          <SiJavascript className='iconSkills' />
          <SiReact className='iconSkills' />
          <FaGitAlt className='iconSkills' />
          <FaGithub className='iconSkills' />
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
