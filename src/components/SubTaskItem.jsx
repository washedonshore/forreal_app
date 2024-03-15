import React from 'react'
import styles from 'components/styles/SubTaskItem.module.css'
import trash from 'assets/trash.svg'
import edit from 'assets/edit.svg'


function SubTaskItem ({subTask}){



    return (
        <>
        <div className={styles.addedSubbox}>
        <p className={styles.subtaskbox}>{subTask}</p>
        <img src={edit} className={styles.editIcon}/>
        <img src={trash} className={styles.trashIcon}/>
        </div>
        </>

    )

}

export default SubTaskItem