import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Container, Heading } from "@chakra-ui/react";


export default function Pagenotfound() {
	return (
		<Container>
			<Box
        textAlign={'center'}
        mt={50}
			>
				<Heading fontSize={{base:'7rem',md:'10rem'}} color={"primary.main"} >
					404
				</Heading>
        <Heading size={{base:'lg',md:'xl'}} fontWeight={'normal'}>
          URL ที่คุณเรียกไม่มีอยู่ในระบบ.
        </Heading>
        <Heading size={{base:'sm',md:'md'}} mt={30} fontWeight={'thin'}>
        <ArrowUpIcon boxSize={{base:30,md:50}}/> คลิกเมนูด้านบน คือวิธีเข้าใช้ที่ดีที่สุด <ArrowUpIcon boxSize={{base:30,md:50}}/>
        </Heading>
			</Box>
		</Container>
	);
}
