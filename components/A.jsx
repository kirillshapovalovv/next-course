import Link from 'next/link'

import styles from '../styles/A.module.css'

function A({ href, text }) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}

export default A
