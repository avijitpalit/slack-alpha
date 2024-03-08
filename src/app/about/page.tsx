import React from 'react'
import styles from './page.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

export default function About() {
  return (
    <main>
        <div className="container">
            <div className='text-center mt-5'>
                <Link className='fs-3' href='/'><FontAwesomeIcon className={styles.backToHome} icon={ faHouse } /></Link>
            </div>
            <h1 className='text-center'>About Me</h1>
            <h6 className="text-center mt-4">Avijit Palit - Full stack web developer</h6>
            <div className="text-center">
                <div className={`text-center mt-3 position-relative d-inline-block mx-auto avatar-wrapper ${styles.avatarWrapper}`}>
                    <img className={styles.avatar} src="https://avijitpalit.netlify.app/static/media/about.bdd7457b9f7a453ec53f.jpg" alt="Me" />

                    <a target='_blank' className={`${styles.socialIcons} ${styles.github}`} href="https://github.com/avijitpalit"><FontAwesomeIcon className='fs-2 text-dark' icon={ faGithub } /></a>

                    <a target='_blank' className={`${styles.socialIcons} ${styles.linkedin}`} href="https://www.linkedin.com/in/avijitpalit/"><FontAwesomeIcon className='fs-3 text-dark' icon={ faLinkedin } /></a>
                </div>
            </div>
            <p className='w-50 mx-auto mt-4 text-center'>
            Taking web development and graphics design as a profession not only fulfills my pocket but also my heart because it has been my passion since my early teenage. <a className='link' target='_blank' href="https://avijitpalit.netlify.app/about">Read more...</a>
            </p>
        </div>
    </main>
  )
}