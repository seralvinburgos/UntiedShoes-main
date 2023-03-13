import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface CardProps {
  shoe: Shoe
}

export const ShoeCard: React.FC<CardProps> = ({ shoe: { model, image, description, price } }) => {
  return (
    <Card maxW='xs' flexBasis={250} flex={1}>
      <CardBody>
        <a href="./shoeDetail">
        <Image
          objectFit='cover'
          boxSize='sm'
          src={image}
          alt={model}
          borderRadius='md'
        />
        </a>
        <Stack mt='3' spacing='2'>
          <Heading size='sm'>{model}</Heading>
          <Text fontSize='xs'>
            {description}
          </Text>
          <Text color='yellow.500' fontSize='xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}