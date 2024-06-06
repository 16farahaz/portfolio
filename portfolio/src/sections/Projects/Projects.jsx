import Styles from './ProjectsStyles.module.css';
import amanha from '../../assets/amanha.jpg';
import simo from '../../assets/simo.png';
import jurse from '../../assets/jurse.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';

function Projects() {
  return (
    <section id='projects' className={Styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={Styles.projectsContainer}>


       <ProjectCard 
       src={amanha} 
       link="https://github.com/16farahaz/ApplicationAmanha.git"
       h3="Amanha" 
       p="Insurance Application"/> 
       <br />
       <ProjectCard 
       src={jurse} 
       link="https://github.com/16farahaz/Jursesiteweb.git"
       h3="Jurse" 
       p="Festival Application"/>
       <br />




       <ProjectCard 
       src={freshBurger} 
       link="https://github.com/16farahaz/AppBiblio-java-mvc-.git"
       h3="Library mangement " 
       p="  Application for a library "/>
              <br />

       <ProjectCard 
       src={simo} 
       link="https://github.com/16farahaz/Simo-Faster.git"
       h3="SimoFaster" 
       p="  Application for foundation"/>
       

      </div>
    </section>
  )
}

export default Projects
