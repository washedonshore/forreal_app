//the entire webpage combined

import React, {useState} from 'react'
import plusButton from 'assets/plusButton.svg'
import battery from 'assets/battery.svg'
import EnterProjectItem from 'components/EnterProjectItem';
import ProjectItem from 'components/ProjectItem';
import EnterEditProjectItem from 'components/EnterEditProjectItem';
import styles from 'styles/AppContainer.module.css'


function AppContainer() {
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);

  const addProject = (user, projectname) =>{
    const newProject = {
      id: Date.now(),
      user: user,
      projectname: projectname,
      isEditing: false,
      subtasks: ["ffs", "aca", "caca"]
    };
    setProjects([...projects, newProject])
  }


  const deleteProject = id => {
    setProjects(projects.filter(newProject=> newProject.id !==id));
  };

  // const deleteSubTask = id => {
  //   setProjects(projects.filter(newProject=> newProject.id !==id));
  // };

  const editProject = id => {
    setProjects(projects.map(newProject=> newProject.id === id ? {
      ...newProject, isEditing: !newProject.isEditing} : newProject
    ))
    console.log(editProject)
  }

  const editNewProject = (user, projectname, id) => {
    setProjects(projects.map(newProject => newProject.id === id ? {
      ...newProject, user, projectname, isEditing: !newProject.isEditing} 
      : newProject
    ))
  }

  return (
    <>
      <div className={styles.fullTaskBox}>
 
        <div className={styles.addTaskBar}>
          <h3>Add Task</h3>
        <button className={styles.plusButton} type="button" onClick={()=>setShow(!show)}><img src={plusButton}
        className={styles.plusButtonImg}/></button>
        </div>
        <h2>Current Projects</h2>
        <div className={styles.enterItem}>{show && <EnterProjectItem addProject={addProject}/>}
        </div>
        {projects.map((newProject)=> (
          newProject.isEditing ? (
            <EnterEditProjectItem editProject={editProject} key={newProject.id} newProject={newProject}/>
          ) : (
          <ProjectItem key={newProject.id} deleteProject={deleteProject} editProject={editNewProject}newProject={newProject}/>
        )))}

          {/* <ProgressBar/> */}
          <div className={styles.statusBar}>
            <img src={battery} className={styles.battery}/>
            </div>
          
    
      </div>
      
    </>
  )
}

export default AppContainer