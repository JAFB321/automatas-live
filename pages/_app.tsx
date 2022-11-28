import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GameProvider } from '../context/GameContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GameProvider >
        <Component {...pageProps} />
      </GameProvider>
    </ChakraProvider>
  )
}

export default MyApp
