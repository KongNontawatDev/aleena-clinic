import { useState, ReactElement, useCallback, useEffect } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Image,
	Modal,
	Link,
	ModalContent,
	ModalOverlay,
	SimpleGrid,
	Stack,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import {
	Tag,
	PlayCircle,
	PhoneCall,
	UserCheck,
	Calendar,
	Facebook,
	Check,
} from "react-feather";
import { Link as ReactLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import { Pagination, Autoplay } from "swiper";
import ImageViewer from "react-simple-image-viewer";
import AOS from "aos";
import "aos/dist/aos.css";
type Props = {};

interface FeatureProps {
	title?: string;
	text: string | ReactElement;
	icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
	return (
		<Stack textAlign={"center"} color={""} spacing={0}>
			<Flex align={"center"} justify={"center"} color={"primary.main"}>
				{icon}
			</Flex>
			<Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
				{title}
			</Text>
			<Text fontSize={{ base: "sm", md: "md" }}>{text}</Text>
		</Stack>
	);
};

const FeatureList = ({ text, icon }: FeatureProps) => {
	return (
		<Stack direction={"row"} align={"center"}>
			<Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"}>
				{icon}
			</Flex>
			<Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
				{text}
			</Text>
		</Stack>
	);
};


const imagePromotion = ["./image/promotion1.webp"];

const imageReview = [
	"./image/review13.webp",
	"./image/review1.webp",
	"./image/review2.webp",
	"./image/review3.webp",
	"./image/review4.webp",
	"./image/review5.webp",
	"./image/review6.webp",
	"./image/review7.webp",
	"./image/review8.webp",
	"./image/review9.webp",
	"./image/review10.webp",
	"./image/review11.webp",
	"./image/review12.webp",
];

const imageGallary = [
	"./image/new_gallery1.webp",
	"./image/new_gallery2.webp",
	"./image/new_gallery3.webp",
	"./image/new_gallery4.webp",
	"./image/new_gallery5.webp",
	"./image/new_gallery6.webp",
	"./image/new_gallery7.webp",
	"./image/new_gallery8.webp",
	"./image/new_gallery9.webp",
	"./image/new_gallery10.webp",
	"./image/new_gallery11.webp",
	"./image/new_gallery12.webp",
	"./image/new_gallery13.webp",
	"./image/new_gallery14.webp",
	"./image/new_gallery15.webp",
	"./image/new_gallery16.webp",
	"./image/new_gallery17.webp",
	"./image/new_gallery18.webp",
];

export default function Home({}: Props) {
	const [openedVideo, setOpenedVideo] = useState<boolean>(false);
	const [currentImageReview, setCurrentImageReview] = useState(0);
	const [currentImagePromotion, setCurrentImagePromotion] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [isViewerOpenPromotion, setIsViewerOpenPromotion] = useState(false);
	const openImageViewer = useCallback((index: number) => {
		setCurrentImageReview(index);
		setIsViewerOpen(true);
	}, []);
	const openImageViewerPromotion = useCallback((index: number) => {
		setCurrentImagePromotion(index);
		setIsViewerOpenPromotion(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImageReview(0);
		setCurrentImagePromotion(0);
		setIsViewerOpen(false);
		setIsViewerOpenPromotion(false);
	};
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			{/* Banner */}
			<Box
				bgGradient="linear(to-b,rgba(117,207,205,0.21) 0%,rgba(255,255,255,1)) 30%"
				mb={{ base: 10, md: 0 }}
			>
				<Container>
					<Stack
						minH={"calc(100vh - 65px)"}
						direction={{ base: "column", md: "row" }}
					>
						<Flex
							py={8}
							flex={1}
							mt={{ base: 0, md: -20 }}
							align={"center"}
							justify={"start"}
						>
							<Stack spacing={6} w={"full"} maxW={"xl"} data-aos="fade-right">
								{/* <Image src="./image/logo.png" width={{base:100}}/> */}
								<Heading
									fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
									textAlign={{ base: "center", md: "left" }}
								>
									<Text
										fontSize={{ base: "sm", lg: "lg" }}
										color={"primary.main"}
										fontFamily={"mono"}
									>
										คลินิกทันตกรรม อลีนา สาขาเมืองยโสธร
									</Text>
									<Text
										as={"span"}
										color={"primary.main"}
										fontSize={{ base: "6xl", lg: "8xl" }}
										position={"relative"}
										_after={{
											content: "''",
											width: "full",
											height: useBreakpointValue({ base: "5%", md: "10%" }),
											position: "absolute",
											bottom: 1,
											left: 0,
											bg: "primary.main",
											zIndex: -1,
										}}
									>
										Aleena
									</Text>
									<br />{" "}
									<Text
										color={"gray.600"}
										as={"span"}
										fontFamily={"body"}
										fontSize={{ base: "4xl", lg: "7xl" }}
									>
										Dental Clinic
									</Text>{" "}
								</Heading>

								<Text fontSize={{ base: "sm", lg: "xl" }} color={"gray.500"}>
									" รอยยิ้มที่สมบูรณ์ออกแบบได้ด้วยตัวคุณ "
									ที่คลีนิกทันตกรรมอลีนาให้มากกว่าการรักษา …เหนือกว่าการทำฟัน
									คือความใส่ใจ
									<Text fontSize={{ base: "sm", lg: "xl" }} mt={2} textIndent={'50px'} color={"gray.500"}>
									พร้อมมอบประสบการณ์การทำฟันที่แตกต่าง
									มาร่วมพิสูจน์ทุกคำรีวิวที่เกิดขึ้นที่นี่ คลินิกทันตกรรมอลีนา 
								</Text>
								</Text>

								

								<Stack direction={{ base: "column", md: "row" }} spacing={4}>
									<Button
										as={Link}
										href="/promotion"
										px={"7"}
										leftIcon={<Tag />}
										rounded={"full"}
										bg={"primary.main"}
										color={"white"}
										fontFamily={"mono"}
										_hover={{
											bg: "primary.75",
										}}
									>
										โปรโมชั่น
									</Button>
									<Button
										px={5}
										rounded={"full"}
										fontFamily={"mono"}
										leftIcon={<PlayCircle />}
										onClick={() => setOpenedVideo(true)}
									>
										ดูวีดีโอ
									</Button>
								</Stack>
							</Stack>
						</Flex>
						<Flex
							flex={1}
							align={"center"}
							justify={"center"}
							data-aos="fade-left"
						>
							<Image
								rounded={"3xl"}
								alt={"banner Image"}
								objectFit={"cover"}
								height={"80%"}
								src={"./image/banner3.webp"}
							/>
						</Flex>
					</Stack>
				</Container>
			</Box>

			<Modal
				isOpen={openedVideo}
				onClose={() => setOpenedVideo(false)}
				isCentered
				size={"6xl"}
			>
				<ModalOverlay zIndex={20}/>
				<ModalContent>
					<Box
						as="video"
						autoPlay
						controls
						src="./image/video2.mp4"
						objectFit="contain"
						sx={{
							aspectRatio: "16/9",
						}}
					/>
				</ModalContent>
			</Modal>
			{/* Feature */}
			<Box bg={"primary.25"}>
				<Container>
					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 4 }}
						p={5}
						spacing={10}
						rounded={"3xl"}
					>
						<div data-aos="fade-right">
							<Feature
								icon={<Icon as={PhoneCall} w={12} h={12} />}
								title={"เบอร์โทรศัพท์"}
								text={"098-356-3711"}
							/>
						</div>
						<div data-aos="fade-up">
							<Feature
								icon={<Icon as={UserCheck} w={12} h={12} />}
								title={"พูดคุยกับคุณหมอ"}
								text={"ปรึกษาปัญหาฟรี!!"}
							/>
						</div>
						<div data-aos="fade-down">
							<Feature
								icon={<Icon as={Calendar} w={12} h={12} />}
								title={"เปิดบริการทุกวัน"}
								text={`ตั้งแต่ 16.00 น - 20.00 น`}
							/>
						</div>
						<div data-aos="fade-left">
							<Feature
								icon={<Icon as={Facebook} w={12} h={12} />}
								title={"ติดตามข่าวสารได้ที่"}
								text={
									<Link
										textDecoration={"underline"}
										as={ReactLink}
										to={"https://www.facebook.com/aleenadentalclinicyasothon"}
										target="_blank"
									>
										เพจเฟสบุ๊ค
									</Link>
								}
							/>
						</div>
					</SimpleGrid>
				</Container>
			</Box>

			{/* Clinic Info */}
			<Box>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Stack spacing={4} data-aos="fade-right">
							<Heading size={{ base: "lg", md: "xl" }}>
								คลินิกทันตกรรม{" "}
								<Text as={"span"} color={"primary.main"}>
									อลีนา
								</Text>{" "}
								สาขาเมืองยโสธร
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
								sx={{ textIndent: "50px" }}
							>
								คลินิกทันตกรรมสาขาใหญ่ ตั้งอยู่ที่ 658 ถนนแจ้งสนิท ตำบลในเมือง
								อำเภอเมือง จังหวัดยโสธร เปิดให้บริการมานานกว่า 10 ปี
								ให้บริการทันตกรรม ด้วย เทคโนโลยี ที่ทันสมัยอาทิ ระบบดิจิทอล
								ทางทันตกรรม เครื่องเอ็กซเรย์ระบบดิจิตอล
								ท่านสามารถทําการนัดหมายล่วงหน้า หรือปรึกษาปัญหาได้ฟรี
								และมีทั้งหมด 3 สาขา
							</Text>
							<Stack spacing={3}>
								<Stack direction={"row"} align={"center"}>
									<Flex w={8} h={8} align={"center"} justify={"center"}>
										<Image
											src="./image/number-one.webp"
											width={30}
											height={30}
										/>
									</Flex>
									<Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
										สาขาในเมืองยโสธร
									</Text>
								</Stack>
								<Stack direction={"row"} align={"center"}>
									<Flex w={8} h={8} align={"center"} justify={"center"}>
										<Image
											src="./image/number-two.webp"
											width={30}
											height={30}
										/>
									</Flex>
									<Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
										สาขาเสลภูมิ
									</Text>
								</Stack>
								<Stack direction={"row"} align={"center"}>
									<Flex w={8} h={8} align={"center"} justify={"center"}>
										<Image
											src="./image/number-thee.webp"
											width={30}
											height={30}
										/>
									</Flex>
									<Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
										สาขาเลิงนกทา
									</Text>
								</Stack>
							</Stack>
						</Stack>
						<Flex data-aos="fade-left">
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/img3.webp"}
								objectFit={"cover"}
							/>
						</Flex>
					</SimpleGrid>
				</Container>
			</Box>

			{/* Clinic Info2 */}
			<Box bg={"primary.25"}>
				<Container py={12}>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex order={{ base: 2, md: 1 }} data-aos="fade-right">
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/img7.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Stack spacing={4} order={{ base: 1, md: 2 }} data-aos="fade-left">
							<Heading size={{ base: "lg", md: "xl" }}>
								ทำไมต้องจัดฟัน
								<Text as={"span"} color={"primary.main"}>
									กับเรา?
								</Text>
							</Heading>
							<Text
								color={"gray.500"}
								lineHeight={"8"}
								fontSize={{ base: "md", md: "lg" }}
								sx={{ textIndent: "50px" }}
							>
								การจัดฟันจึงเป็นการรักษาและแก้ไขปัญหาที่เกิดจากฟันเรียงตัวไม่เหมาะสม
								เพื่อให้ฟันอยู่ในตำแหน่งที่ถูกต้องและเหมาะสม
								การจัดฟันจะช่วยลดปัญหาการในเคี้ยวอาหารและทำให้ฟันเรียงตัวสวยงามเป็นระเบียบทำให้มีความมั่นใจมากขึ้น
								นอกจากนี้การจัดฟันยังมีผลดีต่อสุขภาพในช่องปากและฟันอีกด้วย
							</Text>
							<Stack spacing={1}>
								<FeatureList
									icon={<Check color="green" strokeWidth={4} />}
									text={"ได้สุขภาพช่องปากที่ดี"}
								/>
								<FeatureList
									icon={<Check color="green" strokeWidth={4} />}
									text={"ปรับรูปร่างใบหน้า"}
								/>
								<FeatureList
									icon={<Check color="green" strokeWidth={4} />}
									text={"เพิ่มความมั่นใจในตนเอง"}
								/>
							</Stack>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>

			{/* Promotion Banner */}
			<Box mt={{ base: 0, md: 2 }}>
				<Container py={12}>
					<VStack>
						<Stack spacing={4} data-aos="fade-down">
							<Heading size={{ base: "lg", md: "xl" }} mb={5}>
								โปรโมชั่น
								<Text as={"span"} color={"primary.main"}>
									ที่ไม่ควรพลาด!!
								</Text>
							</Heading>
						</Stack>
						<Image
							rounded={"3xl"}
							alt={"feature image"}
							src={"./image/promotion1.webp"}
							objectFit={"cover"}
							onClick={() => openImageViewerPromotion(0)}
							data-aos="fade-up"
						/>
					</VStack>
				</Container>
			</Box>

			{/* Carousel Review */}
			<Flex
				w={"full"}
				h={"400px"}
				backgroundImage={"url(./image/img8.webp)"}
				backgroundSize={"cover"}
				backgroundPosition={"center center"}
				mb={10}
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
								รีวิวจากลูกค้า
							</Text>
							<Swiper
								slidesPerView={1}
								spaceBetween={10}
								pagination={{
									clickable: true,
								}}
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
								modules={[Pagination]}
								className="mySwiper"
							>
								{imageReview.map((image: any, index: number) => (
									<SwiperSlide style={{ borderRadius: "1.5rem" }} key={index}>
										<Image
											rounded={"3xl"}
											alt={"feature image"}
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
					src={imageReview}
					currentIndex={currentImageReview}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}

			
			{isViewerOpenPromotion && (
				<ImageViewer
					src={imagePromotion}
					currentIndex={currentImagePromotion}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}

			{/* Gallary */}
			<Box data-aos="fade-up">
				<Text
					color={"primary.main"}
					fontWeight={700}
					lineHeight={1.2}
					fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
					textAlign={"center"}
					mb={6}
				>
					"รอยยิ้มที่สมบูรณ์แบบ ออกแบบได้ด้วยตัวคุณ"
				</Text>
				<Swiper
					style={{ zIndex: -1 }}
					loop={true}
					slidesPerView={1}
					spaceBetween={0}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
						1200: {
							slidesPerView: 5,
						},
						1500: {
							slidesPerView: 6,
						},
						1700: {
							slidesPerView: 7,
						},
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
				>
					{imageGallary.map((image: any, index: number) => (
						<SwiperSlide key={index}>
							<Image
								alt={"feature image"}
								src={image}
								objectFit={"cover"}
								onClick={() => openImageViewer(index)}
								zIndex={-1}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>

			<Box bg={"primary.25"}>
				<Container py={12}>
					<Heading
						size={{ base: "lg", md: "xl" }}
						mb={6}
						textAlign={"center"}
						data-aos="fade-up"
					>
						#แล้วพบกันที่ <br></br>
						<Text as={"span"} color={"primary.main"}>
							คลินิกทันตกรรม อลีนา
						</Text>
					</Heading>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<Flex
							data-aos="fade-right"
							as={Link}
							href="https://goo.gl/maps/wHwV31YUeKTTkZqM7"
							target="_blank"
						>
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/map1.webp"}
								objectFit={"cover"}
							/>
						</Flex>
						<Flex
							data-aos="fade-left"
							as={Link}
							href="https://www.facebook.com/aleenadentalclinicyasothon"
							target="_blank"
						>
							<Image
								rounded={"3xl"}
								alt={"feature image"}
								src={"./image/opened.webp"}
								objectFit={"cover"}
							/>
						</Flex>
					</SimpleGrid>
				</Container>
			</Box>
		</>
	);
}
