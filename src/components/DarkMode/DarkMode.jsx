"use client"

import React, { useContext } from "react";
import styles from "./DarkMode.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { MdModeNight, MdLightMode } from 'react-icons/md'

const DarkMode = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>
                <MdModeNight />
            </div>
            <div className={styles.icon}>
                <MdLightMode />
            </div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
};

export default DarkMode;