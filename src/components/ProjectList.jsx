import '../styles/ProjectList.css';
import Project from './Project';

function ProjectList(props) 
{
  return (
    <div className='projectsMainContent'>
      {
        props.projects.map(project => 
          <Project 
            key={project.id}
            project={project} 
          />)
      }
    </div>
  );
}

export default ProjectList;
