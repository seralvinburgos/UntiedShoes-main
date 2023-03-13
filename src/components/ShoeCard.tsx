import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react'

 export default function ShoeCard() {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <a href="./shoeDetail">
                    <Image
                    src='./assets/images/card1.jpg'
                    alt='Green Nike'
                    borderRadius='lg'
                    />
                    </a>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique iusto incidunt nostrum a quaerat nam dolorem modi accusantium facilis?
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $165
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
 }
 
 