import type { GetServerSideProps, NextPage } from 'next'
import { getCsrfToken } from 'next-auth/react'

import {
  Box,
  Center,
  VStack,
  Heading,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
} from '@chakra-ui/react'
import Image from 'next/image'

interface Props {
  csrfToken: string | undefined
}

const Entrar: NextPage<Props> = ({ csrfToken }) => {
  return (
    <Box w="100vw" h="100vh" bgColor="whitesmoke">
      <Center h="full">
        <Container maxW="lg">
          <Stack spacing="8">
            <VStack spacing="2">
              <Heading as="h1" size="xl" color="blackAlpha.800">
                {process.env.NEXT_PUBLIC_PROJECT_NAME}
              </Heading>
            </VStack>

            <Box p="6" boxShadow="2xl" borderRadius="xl" bgColor="white">
              <form method="POST" action="/api/auth/signin/email">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                <FormControl>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input id="email" name="email" type="email" placeholder="Digite o seu e-mail" isRequired />
                  <FormHelperText>O e-mail deve ser o mesmo fornecido pela gerência.</FormHelperText>
                </FormControl>

                <Button mt="6" w="full" type="submit" colorScheme="blue">
                  Entrar
                </Button>
              </form>
            </Box>
          </Stack>
        </Container>
      </Center>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const csrfToken = await getCsrfToken(context)

  return {
    props: { csrfToken },
  }
}

export default Entrar
