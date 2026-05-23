import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    // per ager galti sae humney ess heder ko class button dae di tho jo properties Button.jsx wali button pae lagai hongi vo ess pae bhi apply ho jayengi jo ki sahi chij nahi hai
    <div className={styles.header}>
        <h3>Shruti</h3>
        {/* arey per ess mae ager class name btn dae diya tho bhi ye button wala css kyo apply ho raha hai ease anhi hona chiye tah per ye hi problem hai ess liye hum tailwid ka use karne lage kyoko dono collide ho rahi hai */}
        <button className={styles.btn}>Login</button> 
    </div>
  )
}

export default Header