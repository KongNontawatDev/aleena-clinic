import { useEffect } from "react";
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
import SEO from "../SEO";
type Props = {};

export default function Service({}: Props) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<SEO
				title={`บริการของเรา | คลินิกทันตกรรมอลีนา - Aleena dental clinic`}
				description={
					"ดูแลสุขภาพปากของคุณด้วยบริการทันตกรรมที่ทันสมัย | รอยยิ้มที่สมบูรณ์ออกแบบได้ด้วยตัวคุณ ที่คลีนิกทันตกรรมอลีนาให้มากกว่าการรักษา …เหนือกว่าการทำฟัน คือความใส่ใจ"
				}
				name={`คลินิกทันตกรรมอลีนา`}
				type={`article`}
			/>
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
								🦷 "บริการทันตกรรมครบวงจร ดูแลสุขภาพช่องปากอย่างมืออาชีพ"
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
								alt={"ทำไมต้องจัดฟัน | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
								src={"./image/banner5.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left">
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
								💎 ทำไมต้องจัดฟัน?
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
							>
								🦷 <strong>ปัญหาฟันที่พบบ่อย:</strong>
								<br />
								• ฟันเก ฟันเหยิน ฟันห่าง ฟันซ้อน
								<br />
								• การสบฟันที่ไม่ดี ขากรรไกรไม่สมดุล
								<br />
								• รูปร่างและขนาดฟันไม่เหมาะสม
								<br />
								<br />
								✨ <strong>ประโยชน์ของการจัดฟัน:</strong>
								<br />
								• แก้ไขปัญหาฟันเรียงตัวไม่เหมาะสม
								<br />
								• ลดปัญหาการเคี้ยวอาหาร
								<br />
								• ทำให้ฟันเรียงตัวสวยงามเป็นระเบียบ
								<br />
								• เพิ่มความมั่นใจและบุคลิกภาพที่ดีขึ้น
								<br />
								• ป้องกันฟันผุและโรคเหงือก
								<br />
								• ทำความสะอาดฟันได้ง่ายขึ้น
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>

			{/* Promotion Info 2 */}
			<Box bg={"primary.25"}>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex data-aos="fade-right" order={{ base: 1, md: 2 }}>
							<Image
								rounded={"3xl"}
								alt={"จัดฟันช่วยเรื่องอะไรบ้าง | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
								src={"./image/banner1.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left" order={{ base: 2, md: 1 }}>
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
								✨ จัดฟันช่วยเรื่องอะไรบ้าง?
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
							>
								🦷 <strong>สุขภาพช่องปากที่ดีขึ้น:</strong>
								<br />
								• ปรับแนวฟันให้เรียงตัวเป็นระเบียบ
								<br />
								• ลดปัญหาฟันผุและโรคเหงือก
								<br />
								• ป้องกันเศษอาหารติดตามซอกฟัน
								<br />
								• ทำให้การดูแลรักษาฟันง่ายขึ้น
								<br />
								<br />
								😊 <strong>ความสวยงามและความมั่นใจ:</strong>
								<br />
								• ปรับรูปหน้าให้เข้าที่ ดูสมส่วนขึ้น
								<br />
								• แก้ปัญหาฟันสบลึก ฟันล่างยื่น ฟันเหยิน
								<br />
								• ทำให้กล้าหัวเราะและยิ้มได้เต็มที่
								<br />
								• เพิ่มความมั่นใจในตนเอง
								<br />
								• รอยยิ้มและฟันที่สวยงาม
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
								alt={"ขั้นตอนการเข้ารับการรักษาจัดฟัน | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
								src={"./image/banner4.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left">
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
								📋 ขั้นตอนการเข้ารับการรักษาจัดฟัน
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
							>
								📝 <strong>ขั้นตอนที่ 1: ปรึกษาและวางแผน</strong>
								<br />
								• ปรึกษาทันตแพทย์ผู้เชี่ยวชาญ
								<br />
								• พิมพ์ปากและทำประวัติ
								<br />
								• 💰 พิเศษ! ค่าพิมพ์ปากลด 50% เหลือเพียง 500 บาท
								<br />
								• *(ถ้าไม่ตกลงทำ ไม่มีค่ารักษา ไม่ต้องจ่ายเงิน)
								<br />
								<br />
								📸 <strong>ขั้นตอนที่ 2: X-ray</strong>
								<br />
								• เอ็กซเรย์ฟัน 800 บาท
								<br />
								<br />
								🦷 <strong>ขั้นตอนที่ 3: เตรียมช่องปาก</strong>
								<br />
								• เคลียร์ช่องปาก ขูดหินปูน อุดฟัน
								<br />
								• ถอนฟัน ผ่าฟันคุด (ถ้าจำเป็น)
								<br />
								<br />
								🔧 <strong>ขั้นตอนที่ 4: ติดเครื่องมือจัดฟัน</strong>
								<br />
								<strong>สำหรับนักเรียน (อายุไม่เกิน 18 ปี):</strong>
								<br />
								• แบบที่ 1: จ่ายครั้งเดียว 4,000 บาท
								<br />
								• แบบที่ 2: แบ่งจ่าย 2,500 บาท x 2 เดือน
								<br />
								• เดือนต่อไป: เดือนละ 1,000 บาท (ไม่เกิน 35,000 บาท)
								<br />
								<br />
								<strong>สำหรับผู้ใหญ่ (อายุมากกว่า 18 ปี):</strong>
								<br />
								• แบบที่ 1: จ่ายครั้งเดียว 5,000 บาท
								<br />
								• แบบที่ 2: แบ่งจ่าย 3,000 บาท x 2 เดือน
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>
		</>
	);
}
