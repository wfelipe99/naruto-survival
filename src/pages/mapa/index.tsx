import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import { api } from '@utils/api'

import WorldMap from '@components/WorldMap'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Naruto Survival - Mapa Mundial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box w="100%" h="100%">
        <WorldMap />
      </Box>
    </>
  )
}

export default Home
