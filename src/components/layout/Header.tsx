import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import { api } from '@utils/api'

import WorldMap from '@components/WorldMap'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex h="24" bgColor="gray.500" color="white" align="center" px="12">
      <Heading size="3xl">{process.env.NEXT_PUBLIC_PROJECT_NAME}</Heading>
    </Flex>
  )
}

export default Home
