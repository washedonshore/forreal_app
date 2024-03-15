//the bar to enter in user and task


import React, {useState} from 'react'
import styles from 'components/styles/EnterProjectItem.module.css'



function EnterProjectItem ({addProject}){
    const [user,setUser] = useState("");
    const [project,setProject] = useState("");



const handleChangeUser = (e) => {
    setUser(e.target.value);
};


const handleChangeProject = (e) => {
    setProject(e.target.value);
};

    // const checkInput = (user, projectname) =>{
    //     if (!user || !projectname) {
    //         alert("Fill in all fields");
    //     }
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        checkInput();
        addProject(user, project);
        setUser("");
        setProject("");
    };


    return (
        <>
        <form className={styles.EnterTaskItem} onSubmit={handleSubmit}>

            <input className={styles.user} type="text" value={user} 
            onChange={handleChangeUser} placeholder="Enter User"/>
            <input className={styles.project} type="text" value={project}
            onChange={handleChangeProject} placeholder="Enter Project"/>
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}

export default EnterProjectItem