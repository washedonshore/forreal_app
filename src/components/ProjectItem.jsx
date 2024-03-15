///all individual items that get registered through the EntertaskItem

import React from 'react'
import styles from 'components/styles/ProjectItem.module.css'
import trash from 'assets/trash.svg'
import edit from 'assets/edit.svg'


function ProjectItem ({newProject, deleteProject, editProject}){


    return (
        <>
        {newProject.isEditing ? (
            <EnterEditProjectItem editProject={editProject} newProject={newProject}/>
        ) : (
        <div className={styles.addedbox}>
        <p className={styles.userbox}>User: {newProject.user}</p>
        <p className={styles.taskbox}>Project: {newProject.projectname}</p>
        <img src={edit} className={styles.editIcon} onClick={()=> editProject(newProject.id)}/>
        <img src={trash} className={styles.trashIcon} onClick={()=> deleteProject(newProject.id)}/>
        </div>
        )}

            <div>
            <h3>Subtasks</h3>
            <ul>
                {newProject.subtasks.map((subtask, index) => (
                    <li key={index}>{subtask}</li>
                ))}
            </ul>
            </div>

        </>
    )
}

export default ProjectItem