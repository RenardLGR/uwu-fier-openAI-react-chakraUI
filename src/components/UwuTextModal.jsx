import React from 'react';
import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
    Flex,
    useClipboard
} from '@chakra-ui/react'
import {HiClipboardCopy} from 'react-icons/hi'

const UwuTextModal = ( {uwuText, loading, isOpen, closeModal}) => {

    //Chakra custom hook that handles copying content to clipboard
    const { onCopy, value, setValue, hasCopied } = useClipboard("");

    const copyToClipboard = () => {
        setValue(uwuText)
        //Custom JS, useClipboard hook seems to bug on its own
        navigator.clipboard.writeText(uwuText);
        onCopy()
    }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay/>
        <ModalContent bg='pink.300'>
            <ModalHeader>
                Text uwu'd :
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display={'flex'} alignItems='center' justifyContent='center'>
                {loading ? (
                    <CircularProgress isIndeterminate color='pink.300'/>
                ) : (
                    <Text>
                        {uwuText}
                    </Text>
                )}
            </ModalBody>
            <ModalFooter>
                <Flex>
                {loading ? (
                    <></>
                ) : (
                    <Button 
                    colorScheme='pink' 
                    mr={3} 
                    rightIcon={ <HiClipboardCopy/> } 
                    onClick={copyToClipboard}
                    >
                       {hasCopied ? "Copied!" : "Copy"}
                    </Button>
                )}
                    <Button colorScheme='pink' mr={3} onClick={closeModal}>
                        Close
                    </Button>
                </Flex>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default UwuTextModal