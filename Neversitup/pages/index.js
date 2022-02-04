import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <div className="box-card">
        <Link href="/questionone">
          <div className="card ml-4 mr-4">
            <div className="box-img">
              <img src="/crm-system-question-1-1.png" alt="questionone" className="img-question"/>
              
            </div>
            <label className="title-question text-center">
            Question 1
            </label>
          </div>
        </Link>
        <Link href="/questiontwo">
          <div className="card ml-4 mr-4">
            <div className="box-img">
              <img src="/crm-system-question-2-1.png" alt="questionone" className="img-question"/>
            </div>
            <label className="title-question text-center">
            Question 2
            </label>
          </div>
        </Link>
      </div>
    </div>
  )
}
