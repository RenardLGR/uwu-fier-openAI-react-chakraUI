import React from 'react'
import { useState } from 'react'
import { Box, Text, Flex} from '@chakra-ui/react'

const Chat = () => {
    let [history, setHistory] = useState([['user', 'Hello'], ['ai', "Hellloowww :3"], ['user', 'How are you?'], ['ai', "I am wevvyy fine (❁´◡`❁)"]])
    return (
        <>
            {history.map(item => {
                return (
                <Message message={item}/>
                )
            })}
        </>
    )
}


const Message = ({message}) => {
    let author = message[0]
    let content = message[1]
    return (
        <>
            <Text color={author==='ai' ? 'pink.300' : 'blue.300'}>{author} :</Text>
            <Text color={author==='ai' ? 'pink.300' : 'blue.300'}>{content}</Text>
        </>
    )
}

export default Chat