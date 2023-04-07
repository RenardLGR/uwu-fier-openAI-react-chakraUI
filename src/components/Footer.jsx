import React from 'react'
import { Box, Image, Text, Flex} from '@chakra-ui/react'
import logo from '../assets/openai.png'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const whereAmI = () => {
    let location = useLocation()
    console.log(location);
  }
  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
          <div onClick={whereAmI}>click</div>
        </Flex>
        <Flex justifyContent='space-between' alignItems='center'>
          <Link to="/">Home</Link>
          <Link to="/chat">Chat</Link>
        </Flex>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logo} alt='openAI' marginRight={1}/>
            <Text>Powered by Open AI</Text>
        </Flex>
    </Box>
  )
}

export default Footer