import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/HeaderDefault';
import Footer from '../components/footer/FooterDefault';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
      <div className='wrapper_home'></div>
      {/* <Footer/> */}
    </>
  )
}
