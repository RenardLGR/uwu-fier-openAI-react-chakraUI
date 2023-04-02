import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import logo from "../assets/uwu_emoticon.svg"

const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={500} marginBottom='1rem' />
        <Heading marginBottom='1rem'>UwU-fier</Heading>
        <Text fontSize={25} textAlign='center'>
          Add tenderness 🍗 to your text
        </Text>
    </>
  )
}

export default Header