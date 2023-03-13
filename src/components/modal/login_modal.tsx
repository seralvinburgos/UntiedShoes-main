import { Button, Flex, Heading, Input, Modal, ModalContent } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  overlay: React.ReactNode
  formBackground: string
  toggleColorMode: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, overlay, formBackground, toggleColorMode }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login(credentials.username, credentials.password)
    onClose()
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <Flex alignItems="center" justifyContent="center">
          <Flex direction="column" background={formBackground} p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <Input
              placeholder="Enter your username"
              variant="filled"
              mb={3}
              type="text"
              onChange={e => setCredentials({ ...credentials, username: e.target.value })}
              value={credentials.username}
            />
            <Input
              placeholder="*******"
              variant="filled"
              mb={6}
              type="password"
              onChange={e => setCredentials({ ...credentials, password: e.target.value })}
              value={credentials.password}
            />
            <Button
              colorScheme="yellow"
              mb={6}
              onClick={handleLogin}
            >
              Log in
            </Button>
            <Button onClick={toggleColorMode} >Toggle Color Mode</Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  )
}