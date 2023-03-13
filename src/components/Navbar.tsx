import { 
Box, 
Button, 
Modal, 
ModalOverlay, 
ModalContent, 
useDisclosure, 
Flex, 
Heading, 
Input, 
useColorMode, 
useColorModeValue, 
Menu,
MenuButton,
MenuList,
MenuItem,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import React from 'react'
import { AuthContext } from '../context'

interface LoginModalProps {
isOpen: boolean
onClose: () => void
overlay: React.ReactNode
formBackground: string
toggleColorMode: () => void
}



export default function Navbar() {
const OverlayOne = () => (
<ModalOverlay
    bg='blackAlpha.100'
    backdropFilter='blur(10px) hue-rotate(20deg)'
/>
)

const { isOpen, onOpen, onClose } = useDisclosure()
const [overlay, setOverlay] = React.useState(<OverlayOne />)

const { toggleColorMode } = useColorMode()
const formBackground = useColorModeValue("white", "gray.700")

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
    <>
        <header>
            <Box 
                className="navbar"
                display='flex'
                flexDirection='row'
                backgroundColor='blackAlpha.200'
                >
                <Box className="logo">
                    <NavLink to='home'>
                    <h1>Untied Shoes</h1>
                    </NavLink>
                </Box>
                <Box 
                    className="nav-links"
                    alignItems='center'
                    >
                    <li>
                        <NavLink to="home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="men">Men</NavLink>
                    </li>
                    <li>
                        <NavLink to="women">Women</NavLink>
                    </li>
                    <Menu>
                        <MenuButton>Categories</MenuButton>
                        <MenuList fontWeight='semibold'>
                            <MenuItem minH='45px' as='a' href='#'>
                                <NavLink to='trail'>Trail Running</NavLink>
                            </MenuItem>
                            <MenuItem minH='45px' as='a' href='#'>
                                <NavLink to='road'>Road Running</NavLink>
                            </MenuItem>
                            <MenuItem minH='45px' as='a' href='#'>
                                <NavLink to='lifestyle'>Active Lifestyle</NavLink>
                            </MenuItem>
                            <MenuItem minH='45px' as='a' href='#'>
                                <NavLink to='hiking'>Hiking</NavLink>
                            </MenuItem>
                            <MenuItem minH='45px' as='a' href='#'>
                                <NavLink to='casual'>Casual Wear</NavLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box 
                    className="nav-functions"
                    alignItems='center'
                    >
                    <Box>
                        
                        {/* <NavLink to="search">Search</NavLink> */}
                        <Input mt='4' w='80' borderRadius='25px' colorScheme='blackAlpha' placeholder="Search" variant="filled" mb={3} type="search" />

                        
                    </Box>
                    <Box>
                        <Button
                            borderRadius='25px'
                            colorScheme='yellow'
                            onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                            }}
                        >
                            Login
                        </Button>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            {overlay}
                            <ModalContent>
                                <Flex alignItems="center" justifyContent="center">
                                    <Flex direction="column" background={formBackground} p={12} rounded={6}>
                                        <Heading mb={6}>Log in</Heading>
                                        {/* <Input placeholder="Please enter email" variant="filled" mb={3} type="email" />
                                        <Input placeholder="*******" variant="filled" mb={6} type="password" /> */}
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
                                        <Button colorScheme="yellow" mb={6} onClick={handleLogin}>Log in</Button>
                                        <NavLink to='register'onClick={onClose}>Create Account</NavLink>
                                        <Button mt={10} onClick={toggleColorMode} >Toggle Color Mode</Button>
                                    </Flex>
                                </Flex>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Box>
            </Box>
        </header>
    </>
)
}