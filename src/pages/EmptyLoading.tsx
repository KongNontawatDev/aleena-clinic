import { AbsoluteCenter, Center, Spinner } from '@chakra-ui/react'

type Props = {}

export default function EmptyLoading({}: Props) {
  return (
    <Center
    style={{
      height:'90vh',
    }}
    >
      <AbsoluteCenter>
        <Spinner
      size={'xl'}
      speed='0.65s'
      thickness='8px'
      color='primary.main'
      />
      </AbsoluteCenter>
      
    </Center>
  )
}