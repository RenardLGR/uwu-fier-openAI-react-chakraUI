import React from 'react'
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
    CircularProgress
} from '@chakra-ui/react'

const UwuTextModal = ( {uwuText, loading, isOpen, closeModal}) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay/>
        <ModalContent>
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
                <Button colorScheme='pink' mr={3} onClick={closeModal}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default UwuTextModal