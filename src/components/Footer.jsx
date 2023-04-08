import React from 'react'
import { Box, Image, Text, Flex} from '@chakra-ui/react'
import logo from '../assets/openai.png'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
          {/* <Link to="/">Home</Link> */}
          <Link to="/chat">Wanna chat? 😳👉👈</Link>
        </Flex>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logo} alt='openAI' marginRight={1}/>
            <Text>Powered by Open AI</Text>
        </Flex>
    </Box>
  )
}

export default Footer