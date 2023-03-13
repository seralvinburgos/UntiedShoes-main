import { ChevronDownIcon } from '@chakra-ui/icons'
import { Input, Text, Flex, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

export default function Register() {
    return (
        <>
        <Box w='50%' mt='20' mx='auto' h='auto' minH='50vh'>
            <Box mb='10'>
                <Text fontSize='5xl' align='center' fontWeight='semibold'>Create Account</Text>
            </Box>
            <Box>
                <Flex gap='4' justifyContent='center' w=''>
                    <Input placeholder='First Name' variant='filled' mb={3} type='text' />
                    <Input placeholder='Last Name' variant='filled' mb={3} type='text' />
                </Flex>
                <Box mb='10'>
                    <Input placeholder='Email' variant='filled' mb={3} type='email' />
                </Box>
                <Flex gap='4' mb='5'>
                    <Input placeholder='Phone' variant='filled' mb={3} type='number' />
                    <Input placeholder='Birthday' variant='filled' mb={3} type='date' />
                </Flex>
                <Box display='flex' flexDirection='column'>
                <Text mb='4'>Optional</Text>
                {/* <Input placeholder='Gender' variant='filled' mb={3} type='text' w='50%'></Input> */}
                <Menu>
                    <MenuButton mb={3} w='50%' as={Button} rightIcon={<ChevronDownIcon />}>
                        Gender
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Male</MenuItem>
                        <MenuItem>Female</MenuItem>
                        <MenuItem>Prefer not to say</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton mb={3} w='50%' as={Button} rightIcon={<ChevronDownIcon />}>
                        Shoe Size
                    </MenuButton>
                    <MenuList>
                        <MenuItem>5</MenuItem>
                        <MenuItem>5.5</MenuItem>
                        <MenuItem>6</MenuItem>
                        <MenuItem>6.5</MenuItem>
                        <MenuItem>7</MenuItem>
                        <MenuItem>7.5</MenuItem>
                        <MenuItem>8</MenuItem>
                        <MenuItem>8.5</MenuItem>
                        <MenuItem>9</MenuItem>
                        <MenuItem>9.5</MenuItem>
                        <MenuItem>10</MenuItem>
                        <MenuItem>10.5</MenuItem>
                        <MenuItem>11</MenuItem>
                        <MenuItem>11.5</MenuItem>
                        <MenuItem>12</MenuItem>
                        <MenuItem>12.5</MenuItem>
                        <MenuItem>13</MenuItem>
                        <MenuItem>13.5</MenuItem>
                        <MenuItem>14</MenuItem>
                        <MenuItem>14.5</MenuItem>
                    </MenuList>
                </Menu>
                <Input placeholder='Location' variant='filled' mb={20} type='number' w='50%'></Input>
                </Box>
                <Flex>
                    <Button colorScheme='yellow' mx='auto' w='250px'>Submit</Button>
                </Flex>
            </Box>
        </Box>
        </>
    )
}