import styles from './button.module.css'
import React, {useState} from 'react';
 function Button() { 
    const [name,setName] = useState("Guest"); 
    const [age,setAge] = useState(0); 
    const handleClickName = () => { 
       setName("changed");
    }
    const handleClickAge = () => { 
       setAge(age + 1);
    }
    return (
        <>
        <h3>name: {name}</h3>
        <button onClick = {()=>handleClickName()} className={styles.btn}>change me</button>
        
        <h3>age: {age}</h3>
        <button onClick = {()=>handleClickAge()} className={styles.btn}>change me</button>
        
        </>
    );
}
export default Button