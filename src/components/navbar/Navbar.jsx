"use client"
import Link from 'next/link'
import React from 'react'
import DarkMode from '../DarkMode/DarkMode';
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portofolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
];

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link
                href='/'
                className={styles.logo}
            >
                gyanverse
            </Link>
            <div className={styles.links}>
                <DarkMode />
                {
                    links.map(link => (
                        <Link
                            href={link.url}
                            key={link.id}
                            className={styles.link}
                        >
                            {link.title}
                        </Link>
                    ))
                }
                <button
                    className={styles.logout}
                    onClick={() => {
                        console.log("Logged out")
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar
