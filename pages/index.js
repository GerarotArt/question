import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/questionone">
            <a>questionone</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>questiontwo</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>questionthree</a>
          </Link>
        </li>
    </ul>
    </div>
  )
}
