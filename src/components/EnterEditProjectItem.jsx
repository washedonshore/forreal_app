import React, {useState} from 'react'
import styles from 'components/styles/EnterEditProjectItem.module.css'



function EnterEditProjectItem ({editProject, newProject}){
    const [user,setUser] = useState(newProject.user);
    const [projectname,setProject] = useState(newProject.projectname);


const handleChangeUser = (e) => {
    setUser(e.target.value);
};


const handleChangeProject = (e) => {
    setProject(e.target.value);
};

    const handleSubmit = (e) => {
        e.preventDefault();
        editProject(user, projectname, newProject.id)
    };


    return (
        <>
        <form className={styles.EnterEditProjectItem} onSubmit={handleSubmit}>

            <input className={styles.user} type="text" value={user} 
            onChange={handleChangeUser} placeholder={user}/>
            <input className={styles.project} type="text" value={projectname}
            onChange={handleChangeProject} placeholder={projectname}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default EnterEditProjectItem