import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Container, Heading } from "@chakra-ui/react";

type Props = {};

export default function Pagenotfound({}: Props) {
	return (
		<Container>
			<Box
        textAlign={'center'}
        mt={50}
			>
				<Heading fontSize={"10rem"} color={"primary.main"} >
					404
				</Heading>
        <Heading size={'xl'} fontWeight={'normal'}>
          URL ที่คุณเรียกไม่มีอยู่ในระบบ.
        </Heading>
        <Heading size={'md'} mt={30} fontWeight={'thin'}>
        <ArrowUpIcon boxSize={50}/> คลิกเมนูด้านบน คือวิธีเข้าใช้ที่ดีที่สุด <ArrowUpIcon boxSize={50}/>
        </Heading>
			</Box>
		</Container>
	);
}
