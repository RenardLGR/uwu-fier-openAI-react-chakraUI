import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Container } from '@chakra-ui/layout'
import Message from './Message'

const ChatBox = ({ history }) => {

  //autoscroll down
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Container maxWidth="fit-content" overflow={'auto'} height={'75vh'} ref={containerRef}>
      {history.map((item, idx) => {
        return (
          <Message key={idx} message={item} />
        )
      })}
    </Container>
  )
}

export default ChatBox