import { useEffect } from 'react';
import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
type Props = {};

export default function Service({}: Props) {
  	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<Flex
				w={"full"}
				h={"200px"}
				backgroundImage={"url(./image/img2.webp)"}
				backgroundSize={"cover"}
				backgroundPosition={"center center"}
			>
				<VStack
					w={"full"}
					justify={"center"}
					py={6}
					bgGradient={"linear(to-r, blackAlpha.700, transparent)"}
				>
					<Container>
						<Stack spacing={6} data-aos="fade-up" justify={"center"}>
							<Text
								textAlign={"center"}
								color={"white"}
								fontWeight={700}
								lineHeight={1.2}
								fontSize={useBreakpointValue({
									base: "xl",
									md: "4xl",
									lg: "5xl",
								})}
							>
								"ดูแลสุขภาพปากของคุณด้วยบริการทันตกรรมที่ทันสมัย"
							</Text>
						</Stack>
					</Container>
				</VStack>
			</Flex>

      			{/* Promotion Info 1 */}
			<Box>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex data-aos="fade-right">
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/banner5.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left">
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
								ทำไมต้องจัดฟัน ?
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
								sx={{ textIndent: "50px" }}
							>
															เนื่องจากฟันแต่ละคนมีการเรียงตัวที่แตกต่างกันไป
							ไม่ว่าจะเป็นรูปร่างฟัน ขนาดฟัน ฟันเก ฟันเหยิน ฟันห่าง ฟันซ้อน
							การสบฟันที่ไม่ดี รวมถึงความสัมพันธ์ของขากรรไกรฟัน และปัจจัยอื่น ๆ
							ซึ่งเป็นสาเหตุและปัญหาสำคัญที่ทำให้ความมั่นใจลดลง
							รวมถึงบุคลิกภาพที่ไม่ดี
							การจัดฟันจึงเป็นการรักษาและแก้ไขปัญหาที่เกิดจากฟันเรียงตัวไม่เหมาะสม
							เพื่อให้ฟันอยู่ในตำแหน่งที่ถูกต้องและเหมาะสม
							การจัดฟันจะช่วยลดปัญหาการในเคี้ยวอาหารและทำให้ฟันเรียงตัวสวยงามเป็นระเบียบทำให้มีความมั่นใจมากขึ้น
							นอกจากนี้การจัดฟันยังมีผลดีต่อสุขภาพในช่องปากและฟันอีกด้วย
							เนื่องจากโครงสร้างของฟันมีการเรียงตัวเป็นระเบียบจึงช่วยให้ทำความสะอาดได้ง่ายขึ้น
							อีกทั้งยังช่วยป้องกันการเกิดฟันผุและโรคเหงือกอีกด้วย
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>

      {/* Promotion Info 2 */}
			<Box bg={"primary.25"}>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex data-aos="fade-right" order={{base:1,md:2}}>
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/banner1.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left"  order={{base:2,md:1}}>
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
              จัดฟันช่วยเรื่องอะไรบ้าง ?
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
								sx={{ textIndent: "50px" }}
							>
															การจัดฟัน ช่วยปรับแนวฟันให้เรียงตัวเป็นระเบียบ
							และช่วยรักษาสุขภาพช่องปากดีขึ้น ลดปัญหาฟันผุได้
							เพราะฟันที่เรียงตัวไม่เป็นระเบียบนี้
							เป็นที่มาของเศษอาหารที่ไปอยู่ตามซอกหลืบของฟัน
							ซึ่งเป็นสาเหตุหลักของฟันผุ เมื่อฟันอยู่ในตำแหน่งที่เหมาะสม
							ก็ทำให้การดูเเลรักษาฟันก็เป็นเรื่องง่ายขึ้น
							การดูเเลฟันให้ดีเป็นพื้นฐานสำคัญที่ช่วยให้คุณรักษาฟันให้อยู่กับเราไปได้ตลอดชีวิต
							การดัดฟันช่วยปรับรูปหน้าให้เข้าที่ ดูสมส่วนขึ้น
							จากคนที่ประสบปัญหาฟันสบลึกดูฟันล่างยื่น
							หรือฟันเหยินไม่กล้าหัวเราะหรือยิ้มได้เต็มที่ ก็กลับมามั่นใจ
							จากรอยยิ้มเเละฟันที่สวยงามได้							
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>

           {/* Promotion Info 3 */}
			<Box>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex data-aos="fade-right">
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/banner4.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left">
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
              ขั้นตอนการเข้ารับการรักษาจัดฟัน
							</Heading>
							<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
							sx={{ textIndent: "50px" }}
						>
							1.
							คนไข้สามารถเข้ามาปรึกษาวางแผนการรักษากับคุณหมอที่คลินิคและทําการ
							พิมพ์ปาก ทำประวัติมีค่าพิมพ์ปากช่วงนี้พิเศษ รับส่วนลดค่าพิมพ์ปาก
							50% จากปกติ 1,000 บาท ( เหลือเพียง 500 บาทเท่านั้น )
							*(ถ้าไม่ตกลงทำ ไม่มีค่ารักษา ไม่ต้องจ่ายเงินค่ะ)
						</Text>
						<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
							sx={{ textIndent: "50px" }}
						>
							2. X-ray 800 บาท
						</Text>

						<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
							sx={{ textIndent: "50px" }}
						>
							3. เคลียร์ช่องปาก ขูด อุด ถอน ผ่าฟันคุด
						</Text>

						<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
							sx={{ textIndent: "50px" }}
						>
							4. ติดเครื่องมือ <br />
							แบบที่ 1 จ่ายครั้งแรกครั้งเดียว 4,000 บาท <br />
							แบบที่ 2 สามารถแบ่งจ่าย 2,500**บาท (จำนวน 2 เดือน)
						</Text>

						<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
							sx={{ textIndent: "50px" }}
							mt={4}
						>
							เดือนต่อมาเดือนละ 1,000 บาท จนครบการรักษา <br />
							(ไม่เกิน 35,000 บาท) จัดฟันเสร็จก่อนจ่ายครบ ไม่ต้องชำระต่อ <br />
							(**หมายเหตุ** สิทธิสำหรับนักเรียน อายุไม่เกิน 18 ปี)
						</Text>

						<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
							mt={4}
						>
							<b>หรือกรณีเคสที่อายุมากกว่า 18 ปี </b>
							<br />
							แบบที่ 1 จ่ายครั้งแรกครั้งเดียว 5,000 บาท <br />
							แบบที่ 2 สามารถแบ่งจ่าย 3,000 บาท (จำนวน 2 เดือน)
						</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>


		</>
	);
}
