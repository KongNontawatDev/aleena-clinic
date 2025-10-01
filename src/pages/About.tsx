import { useState, useCallback, useEffect } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import { Pagination, Autoplay } from "swiper";
import ImageViewer from "react-simple-image-viewer";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../SEO";

type Props = {};

const images = [
	"./image/img9.webp",
	"./image/img8.webp",
	"./image/img4.webp",
	"./image/img3.webp",
	"./image/img2.webp",
	"./image/gallery18.webp",
	"./image/gallery16.webp",
	"./image/gallery15.webp",
	"./image/gallery7.webp",
	"./image/gallery6.webp",
	"./image/gallery5.webp",
	"./image/gallery2.webp",
	"./image/gallery3.webp",
];

const imageDoct = [
	"./image/doct1.jpg",
	"./image/doct2.jpg",
	"./image/doct3.jpg",
	"./image/doct4.jpg",
];

export default function About({}: Props) {
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [currentImageDoct, setCurrentImageDoct] = useState(0);
	const [isViewerDoctOpen, setIsViewerDoctOpen] = useState(false);

	const openImageViewer = useCallback((index: number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	const openImageDoctViewer = useCallback((index: number) => {
		setCurrentImageDoct(index);
		setIsViewerDoctOpen(true);
	}, []);

	const closeImageDoctViewer = () => {
		setCurrentImageDoct(0);
		setIsViewerDoctOpen(false);
	};

	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<SEO
				title={`เกี่ยวกับเรา | คลินิกทันตกรรมอลีนา - Aleena dental clinic`}
				description={"ตั้งอยู่ที่ 658 ถนนแจ้งสนิท ตำบลในเมือง อำเภอเมือง จังหวัดยโสธร รหัสไปรษณีย์ 35000 เปิดให้บริการมานานกว่า 10 ปี ให้บริการทันตกรรม ด้วย เทคโนโลยี ที่ทันสมัยอาทิ ระบบดิจิทอล ทางทันตกรรม เครื่องเอ็กซเรย์ระบบดิจิตอล เราให้บริการทันตกรรม หลากหลายสาขาทางทันตกรรม"} 
				name={`คลินิกทันตกรรมอลีนา`}
				type={`article`}
			/>
			<Box>
				<Container py={12}>
					<Flex data-aos="fade-down" justify={"center"}>
						<Image
							alt={"รูปภาพ โลโก้ logo image , คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
							src={"./image/logo.png"}
							width={{ base: 76, md: 100 }}
						/>
					</Flex>
					<Heading
						size={{ base: "xl", md: "2xl" }}
						textAlign={"center"}
						color={"primary.main"}
						data-aos="fade-down"
					>
						คลินิกทันตกรรมอลีนา{" "}
					</Heading>
					<Heading
						size={{ base: "lg", md: "xl" }}
						textAlign={"center"}
						color={"primary.main"}
						data-aos="fade-down"
					>
						aleena dental clinic{" "}
					</Heading>

					<Stack maxW={"3xl"} mx={"auto"} mt={6} data-aos="fade-up">
						<Text
							color={"gray.500"}
							lineHeight={"8"}
							fontSize={{ base: "md", md: "lg" }}
						>
							🏥 <strong>คลินิกทันตกรรมอลีนา</strong> สาขาใหญ่ในยโสธร
							<br />
							📍 658 ถนนแจ้งสนิท ตำบลในเมือง อำเภอเมือง จังหวัดยโสธร 35000
							<br />
							⏰ เปิดให้บริการมานานกว่า 10 ปี ด้วยเทคโนโลยีทันสมัย
							<br />
							💡 ระบบดิจิทัล เครื่องเอ็กซเรย์ดิจิตอล
							<br />
							🦷 บริการครบวงจร: จัดฟัน รากฟันเทียม ครอบฟัน สะพานฟัน
							<br />
							✨ เซรามิกวีเนียร์ รักษารากฟัน ถอนฟัน ผ่าฟันคุด
							<br />
							👨‍⚕️ ทีมทันตแพทย์ผู้เชี่ยวชาญ มีวุฒิบัตรรับรอง
							<br />
							📞 นัดหมายล่วงหน้า หรือปรึกษาปัญหาได้ฟรี
						</Text>
					</Stack>
				</Container>
			</Box>

			{/* Promotion Info 2 */}
			<Box bg={"primary.25"}>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex data-aos="fade-right">
							<Image
								rounded={"3xl"}
								alt={"โปรโมชั่นพิเศษ image , คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
								src={"./image/img9.webp"}
								objectFit={"cover"}
								onClick={() => openImageViewer(0)}
							/>
						</Flex>
						<Stack my={6} data-aos="fade-left">
							<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
								💎 ทำไมต้องคลินิกอลีนา?
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
							>
								😊 <strong>ความสุขของคุณเริ่มจากรอยยิ้มที่สวยงาม</strong>
								<br />
								🏥 บริการทันตกรรมคุณภาพสูง ดูแลอย่างเป็นระบบ
								<br />
								💡 เทคโนโลยีทันสมัย: ระบบดิจิทัล เครื่องเอ็กซเรย์ดิจิตอล
								<br />
								👨‍⚕️ ทีมทันตแพทย์ผู้เชี่ยวชาญ ผ่านการอบรมและมีวุฒิบัตร
								<br />
								✨ การรักษาที่เที่ยงตรง ผลลัพธ์ที่ดีที่สุด
								<br />
								❤️ ใส่ใจสุขภาพช่องปากและความพึงพอใจของคุณอย่างแท้จริง
								<br />
								🎯 มุ่งมั่นให้คุณได้รับประสบการณ์ที่ดีที่สุด
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>

			<Box my={12}>
				<Container>
					<Heading
						size={{ base: "lg", md: "xl" }}
						mb={5}
						textAlign={"center"}
						color={"primary.main"}
					>
						👨‍⚕️ ทีมทันตแพทย์ผู้เชี่ยวชาญประจำคลินิก
					</Heading>
					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 4 }}
						spacing={10}
						data-aos="fade-up"
					>
						<Image
							rounded={"3xl"}
							alt={"ทันตแพทย์ประจำคลินิก image, คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
							src={"./image/doct1.jpg"}
							objectFit={"cover"}
							onClick={() => openImageDoctViewer(0)}
						/>
						<Image
							rounded={"3xl"}
							alt={"ทันตแพทย์ประจำคลินิก image, คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
							src={"./image/doct2.jpg"}
							objectFit={"cover"}
							onClick={() => openImageDoctViewer(1)}
						/>
						<Image
							rounded={"3xl"}
							alt={"ทันตแพทย์ประจำคลินิก image, คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
							src={"./image/doct3.jpg"}
							objectFit={"cover"}
							onClick={() => openImageDoctViewer(2)}
						/>
						<Image
							rounded={"3xl"}
							alt={"ทันตแพทย์ประจำคลินิก image, คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
							src={"./image/doct4.jpg"}
							objectFit={"cover"}
							onClick={() => openImageDoctViewer(3)}
						/>
					</SimpleGrid>
				</Container>
			</Box>

			{/* <Box   bg={"primary.25"}>
				<Container py={12}>
					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 3 }}
						spacing={10}
						data-aos="fade-up"
					>
						<VStack>
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/branch1.jpg"}
								objectFit={"cover"}
							/>
							<Stack direction={"row"} align={"center"}>
								<Flex w={8} h={8} align={"center"} justify={"center"}>
									<Image src="./image/number-one.webp" width={30} height={30} />
								</Flex>
								<Text fontWeight={600} fontSize={{ base: "xl", md: "2xl" }}>
									สาขาในเมืองยโสธร
								</Text>
							</Stack>
						</VStack>

						<VStack>
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/branch2.jpg"}
								objectFit={"cover"}
							/>
							<Stack direction={"row"} align={"center"}>
								<Flex w={8} h={8} align={"center"} justify={"center"}>
									<Image src="./image/number-two.webp" width={30} height={30} />
								</Flex>
								<Text fontWeight={600} fontSize={{ base: "xl", md: "2xl" }}>
									สาขาเลิงนกทา
								</Text>
							</Stack>
						</VStack>

						<VStack>
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/branch3.jpg"}
								objectFit={"cover"}
							/>
							<Stack direction={"row"} align={"center"}>
								<Flex w={8} h={8} align={"center"} justify={"center"}>
									<Image
										src="./image/number-thee.webp"
										width={30}
										height={30}
									/>
								</Flex>
								<Text fontWeight={600} fontSize={{ base: "xl", md: "2xl" }}>
									สาขาเสลภูมิ
								</Text>
							</Stack>
						</VStack>
					</SimpleGrid>
				</Container>
			</Box> */}

			<Flex
				w={"full"}
				h={"400px"}
				backgroundImage={"url(./image/img8.webp)"}
				backgroundSize={"cover"}
				backgroundPosition={"center center"}
				data-aos="fade-up"
			>
				<VStack
					w={"full"}
					justify={"start"}
					py={6}
					bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
				>
					<Container>
						<Stack align={"flex-start"} spacing={6}>
							<Text
								color={"white"}
								fontWeight={700}
								lineHeight={1.2}
								fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
							>
								🏥 บรรยากาศภายในคลินิก
							</Text>
							<Swiper
								loop={true}
								slidesPerView={1}
								spaceBetween={10}
								pagination={{
									dynamicBullets: true,
								}}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								modules={[Autoplay, Pagination]}
								breakpoints={{
									"@0.00": {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									"@0.75": {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									"@1.00": {
										slidesPerView: 3,
										spaceBetween: 40,
									},
									"@1.50": {
										slidesPerView: 4,
										spaceBetween: 50,
									},
								}}
								className="mySwiper"
							>
								{images.map((image: any, index: number) => (
									<SwiperSlide style={{ borderRadius: "1.5rem" }} key={index}>
										<Image
											rounded={"3xl"}
											alt={"รูปภาพ บรรยากาศภายในคลินิก image, คลินิกทันตกรรมอลีนา - Aleena dental clinic สาขายโสธร"}
											src={image}
											objectFit={"cover"}
											onClick={() => openImageViewer(index)}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</Stack>
					</Container>
				</VStack>
			</Flex>

			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}
			{isViewerDoctOpen && (
				<ImageViewer
					src={imageDoct}
					currentIndex={currentImageDoct}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageDoctViewer}
				/>
			)}
		</>
	);
}
