import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import TextInput from './TextInput'
import UwuTextModal from './UwuTextModal'

function Home() {
  const [uwuText, setUwuText] = useState('') //uwu text modal content
  const [isOpen, setisOpen] = useState(false) //if the modal that displays the uwu text is open
  const [loading, setLoading] = useState(false) //if we are fetching the data

  const getUwuText = async (text) => {
    //No try catch block?!
    setLoading(true) //we are fetching the data
    setisOpen(true) //the modal has the spinner so we want that open too

    //https://platform.openai.com/docs/api-reference/completions/create
    //Use this option if you want to use completions
    const optionsCompletions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        // prompt: "Please convert the following text by being as cute as possible. Replace every r with a w. Add a suitable emoji after each keywords. : \n" + text,
        // prompt: "Please convert the following text into a super UwU version and use as many kaomojis (such as: (っ◔◡◔)っ, (｡◕‿◕｡), (´｡• ᵕ •｡`), (´･ω･`), (╥﹏╥), ( ･ั﹏･ั), (ﾉ･д･)ﾉ, (^_^), (ಥ﹏ಥ)) as possible: \n" + text,
        // prompt: "Add suitable emojis to this text, replace every r with a w: \n" + text,
        prompt: 'Make the following text more cheerful and expressive. Replace every r with a w. Add some playful and happy kaomojis (like (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ or (づ｡◕‿‿◕｡)づ) or (´｡• ᵕ •｡`) throughout the text. Text:' + text, 
        //temperature is a randomness value between 0 and 1, the higher the temperature the more diverse/creative the answer will be
        temperature: 0.8,
        //This set the maximum words the answer has
        max_tokens: 1024,
        //The higher this value is, the less repetitive the answer will be, can be between -2.0 and 2.0
        frequency_penalty: 0,
        //In general, setting top_p to a lower value will result in more conservative text, while setting it to a higher value will result in more adventurous and unpredictable text.
        top_p: 0.7,
        presence_penalty: 0,
      })
    }

    //Use this option if you want to use chat completions
    // const optionsChatCompletions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`
    //   },
    //   body: JSON.stringify({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{role: "user", content:'For all of this conversation, be as cheerful and as expressive as possible. Replace every r with a w. Add some playful and happy kaomojis (like (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ or (づ｡◕‿‿◕｡)づ) or (´｡• ᵕ •｡`) throughout tour answer. \n' + text}],
    //   })
    // }

    //Use this fetch if you want to use completions
    const response = await fetch(import.meta.env.VITE_OPEN_AI_COMPLETIONS_URL, optionsCompletions)

    //Use this fetch if you want to use chat completions
    // const response = await fetch(import.meta.env.VITE_OPEN_AI_CHAT_COMPLETIONS_URL, optionsChatCompletions)

    const json = await response.json()

    console.log(json);

    //Use this data if you want to use completions
    const data = json.choices[0].text.trim()

    //Use this data if you want to use chat completions
    // const data = json.choices[0].message.content.trim()

    // console.log(data);

    setUwuText(data)
    setLoading(false)
  }

  const closeModal = () => {
    setisOpen(false)
  }

  return (
    <Box backgroundColor={'pink.600'} color='white' height='100vh' paddingTop={130}>
      <Container maxW={'3xl'} centerContent>
        <Header />
        <TextInput getUwuText={getUwuText} />
        <Footer />
      </Container>
      <UwuTextModal uwuText={uwuText} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export default Home
