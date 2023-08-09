import React from 'react'
import styles from './footer.module.css'
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiGithubLine
} from 'react-icons/ri'
import Link from 'next/link'
const Footer = () => {
  return (
    <div
      className={styles.container}>
      <div>
        &copy;2023 GyanVerse. All Rights Reserved.
      </div>
      <div className={styles.icons}>
        <Link target='_blank' className={styles.icon} href='https://www.instagram.com/_i_gyan'>
          <RiInstagramLine />
        </Link>
        <Link target='_blank' className={styles.icon} href='https://www.linkedin.com/in/gyan-prakash-kumar'>
          <RiLinkedinBoxLine />
        </Link>
        <Link target='_blank' className={styles.icon} href='https://www.twitter.com/_gyaan_'>
          <RiTwitterLine />
        </Link>
        <Link target='_blank' className={styles.icon} href='https://www.github.com/GyanPrakashKumar'>
          <RiGithubLine />
        </Link>
      </div>
    </div>
  )
}

export default Footer
