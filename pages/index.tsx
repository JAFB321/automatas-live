import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GameLife } from '../components/GameLife/GameLife'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-darkGray font-poppins">
      <Head>
        <title>Automatas Live</title>
        <meta name="description" content="Create awesome games of life"/>
        <link rel="icon" href="/favicon.ico" />

      </Head>

    <Header/>

    <main>
    <GameLife/>
    </main>

    </div>
  )
}

export default Home
