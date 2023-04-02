import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = ({ getUwuText }) => {

    const [text, setText] = useState('')

    //Chackra hook that allows us to raise an alert if the textarea is empty when we submit
    const toast = useToast()

    const submitText = () => {
        if(text === ''){
            toast({
                title: 'Text field is empty',
                description: 'Please enter some text to uwu',
                status: 'error',
                duration: 3000,
                isClosable: false
            })
        }else{
            getUwuText(text)
        }
    }

    return (
        <>
            <Textarea
                bg='pink.300'
                color='white'
                padding={4}
                marginTop={6}
                height={200}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                bg='pink.300'
                color='white'
                marginTop={4}
                width='100%'
                _hover={{ bg: 'pink.700' }}
                onClick={submitText}
            >✍(◔◡◔)</Button>
        </>
    )
}

export default TextInput