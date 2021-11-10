import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Dashboard from './dashboard';
import { useTheme } from 'next-themes'

export default function Home() {
  const router = useRouter()
  const {theme, setTheme} = useTheme();
  useEffect(() => {
    document.documentElement.classList.add('dark')
    setTheme('dark')
    router.push('/dashboard')
  }, [])
  return (
    <>
      <div className={styles.container}>
        <title>CCC</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <meta name="description" content="Generated by CCC" />
      </div>
    </>
  )
}
