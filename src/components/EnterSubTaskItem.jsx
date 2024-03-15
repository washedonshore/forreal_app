import React, {useState} from 'react'
import styles from 'components/styles/EnterSubTaskItem.module.css'



function EnterSubTaskItem ({addSubTask}){
    const [subTask,setSubTask] = useState("");


const handleChangeSubTask = (e) => {
    console.log("Task:", e.target.value);
    setSubTask(e.target.value);
};

    const handleSubmit = (e) => {
        e.preventDefault();
        addSubTask(subTask);
        setSubTask("");

    };


    return (
        <>
        <form className={styles.EnterTaskItem} onSubmit={handleSubmit}>

            <input className={styles.user} type="text" value={subTask} 
            onChange={handleChangeSubTask} placeholder="Enter SubTask"/>
            <button type="submit">Add SubTask</button>
        </form>
        </>
    )
}

export default EnterSubTaskItem
