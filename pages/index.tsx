import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GameLife } from '../components/GameLife'
import { Header } from '../components/Header'
import { SidebarGameController } from '../components/SidebarGameController'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-darkGray font-poppins">
      <Head>
        <title>Automatas Live</title>
        <meta name="description" content="Create awesome games of life" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header />

      <main>
        <SidebarGameController gameId='landing-game' />
        <GameLife gameId='landing-game' />
      </main>

    </div>
  )
}

export default Home
