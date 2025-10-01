import { ReactElement, useCallback, useEffect, useState } from "react";
import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Check } from "react-feather";
import ImageViewer from "react-simple-image-viewer";
import SEO from "../SEO";

type Props = {};

interface FeatureProps {
	title?: string;
	text: string | ReactElement;
	icon: ReactElement;
}

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

const imagePromotion = [
	"./image/promotion2.webp",
	"./image/promotion3.webp",
	"./image/promotion4.webp",
	"./image/promotion5.webp",
	"./image/promotion6.webp",
];

export default function Promotion({}: Props) {
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);

	const openImageViewer = useCallback((index: number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<>
			<SEO
				title={`โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic`}
				description={
					"จัดฟังเริ่มตั้นที่ ... , เราขอเสนอโปรโมชั่นพิเศษสำหรับบริการทำฟันที่น่าตื่นเต้น!  ไม่ว่าคุณจะมีความต้องการทางทันตกรรมใด ๆ เช่นการขูดหินปูน, อุดฟัน, ถอนฟัน, และการจัดฟัน ทีมแพทย์และผู้เชี่ยวชาญของเราพร้อมที่จะให้บริการคุณด้วยความเชี่ยวชาญและความอบอุ่นที่เป็นเอกลักษณ์ของเรา"
				}
				name={`คลินิกทันตกรรมอลีนา`}
				type={`article`}
			/>
			{/* Banner */}
			<Box>
				<Swiper
					loop={true}
					pagination={{
						dynamicBullets: true,
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiperPromotion"
				>
					<SwiperSlide>
						<Image
							alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
							src={"./image/promotionBanner1.webp"}
							objectFit={"cover"}
							width={"100%"}
							data-aos="fade-up"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
							src={"./image/promotionBanner2.webp"}
							objectFit={"cover"}
							width={"100%"}
							data-aos="fade-up"
						/>
					</SwiperSlide>
				</Swiper>

				{/* Promotion Info 1 */}
				<Box>
					<Container py={12}>
						{/* Heading */}
						<Stack spacing={4} data-aos="fade-down" mb={{ base: 4, md: 8 }}>
							<Heading size={{ base: "lg", md: "2xl" }} textAlign={"center"}>
								🔥 โปรโมชั่นทำฟันพิเศษ
								<Text as={"span"} color={"primary.main"}>
									ที่คุณต้องไม่พลาด!!
								</Text>
							</Heading>
						</Stack>
						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
							<Stack spacing={4} data-aos="fade-right">
								<Text
									color={"gray.500"}
									lineHeight={"8"}
									fontSize={{ base: "md", md: "lg" }}
								>
									🎉 <strong>คลินิกทันตกรรมอลีนา</strong> ขอเสนอโปรโมชั่นพิเศษ!
									<br />
									🦷 บริการทำฟันครบวงจร: ขูดหินปูน อุดฟัน ถอนฟัน จัดฟัน
									<br />
									👨‍⚕️ ทีมแพทย์ผู้เชี่ยวชาญ พร้อมให้บริการด้วยความเชี่ยวชาญ
									<br />
									❤️ ความอบอุ่นที่เป็นเอกลักษณ์ของเรา
									<br />
									💎 โปรโมชั่นพิเศษที่น่าตื่นเต้นสำหรับทุกความต้องการทางทันตกรรม
								</Text>
								<Heading size={{ base: "lg", md: "xl" }}>
									💰 จัดฟันเริ่มต้นที่{" "}
									<Text as={"span"} color={"primary.main"}>
										2,500 บาท
									</Text>
								</Heading>
								<Stack spacing={3}>
									<FeatureList
										icon={<Check color="green" strokeWidth={4} />}
										text={"ปรึกษาทันตแพทย์"}
									/>
									<FeatureList
										icon={<Check color="green" strokeWidth={4} />}
										text={"วางแผนการรักษา"}
									/>
									<FeatureList
										icon={<Check color="green" strokeWidth={4} />}
										text={"ติดเครื่องมือหลุดครั้งแรก"}
									/>
									<FeatureList
										icon={<Check color="green" strokeWidth={4} />}
										text={"จ่ายครบคอร์ส ไม่มีจ่ายเพิ่ม"}
									/>
								</Stack>
							</Stack>
							<Flex data-aos="fade-left">
								<Image
									rounded={"3xl"}
									alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
									src={"./image/promotion2.webp"}
									objectFit={"cover"}
									onClick={() => openImageViewer(0)}
								/>
							</Flex>
						</SimpleGrid>
					</Container>
				</Box>

				{/* Promotion Info 2 */}
				<Box bg={"primary.25"}>
					<Container py={12}>
						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
							<Flex order={{ base: 2, md: 1 }} data-aos="fade-right">
								<Image
									rounded={"3xl"}
									alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
									src={"./image/promotion5.webp"}
									objectFit={"cover"}
									onClick={() => openImageViewer(3)}
								/>
							</Flex>
							<Stack
								spacing={4}
								order={{ base: 1, md: 2 }}
								data-aos="fade-left"
							>
								<Heading size={{ base: "lg", md: "xl" }}>
									💎 "ยิ่งทำฟัน ยิ่งประหยัด! โปรโมชั่นพิเศษทันตกรรมสุดคุ้ม
									<Text as={"span"} color={"primary.main"}>
										สำหรับคุณ!"
									</Text>
								</Heading>
								<Text
									color={"gray.500"}
									lineHeight={"8"}
									fontSize={{ base: "md", md: "lg" }}
								>
									🎉 <strong>ข่าวดี! โปรโมชั่นพิเศษสำหรับผู้ใช้สิทธิ์ประกันสังคม</strong>
									<br />
									💳 ไม่ต้องสำรองจ่ายเงิน ใช้สิทธิ์ประกันสังคมได้เลย!
									<br />
									🆓 รับบริการทันตกรรมโดยไม่ต้องมีค่าใช้จ่ายเพิ่มเติม
									<br />
									✨ โปรโมชั่นพิเศษที่ช่วยประหยัดค่าใช้จ่าย
								</Text>
								<Stack spacing={3}>
									<FeatureList
										icon={<Check color="green" strokeWidth={4} />}
										text={"การตรวจสุขภาพช่องปากและการวินิจฉัย"}
									/>
									<FeatureList
										icon={<Check color="green" strokeWidth={4} />}
										text={"การทำฟันพื้นฐาน"}
									/>
								</Stack>
								<Text
									color={"gray.500"}
									lineHeight={"8"}
									fontSize={{ base: "md", md: "lg" }}
								>
									⏰ <strong>ไม่ต้องรอช้า! โปรโมชั่นนี้มีอายุจำกัด</strong>
									<br />
									📞 เรียนรู้ข้อมูลเพิ่มเติมหรือนัดหมายตรวจสอบสิทธิ์
									<br />
									📱 ติดต่อเราได้ที่เบอร์: <strong>098-356-3711</strong>
									<br />
									🎯 โอกาสดีๆ รอคุณอยู่!
								</Text>
							</Stack>
						</SimpleGrid>
					</Container>
				</Box>

				{/* Image Promotion */}
				<Box my={12}>
					<Container>
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 4 }}
							spacing={10}
							data-aos="fade-up"
						>
							<AspectRatio ratio={1}>
								<Image
									rounded={"3xl"}
									alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
									src={"./image/promotion4.webp"}
									objectFit={"cover"}
									onClick={() => openImageViewer(2)}
								/>
							</AspectRatio>

							<Image
								rounded={"3xl"}
								alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
								src={"./image/promotion3.webp"}
								objectFit={"cover"}
								onClick={() => openImageViewer(1)}
							/>
							<Image
								rounded={"3xl"}
								alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
								src={"./image/promotion6.webp"}
								objectFit={"cover"}
								onClick={() => openImageViewer(4)}
							/>
							<Image
								rounded={"3xl"}
								alt={"โปรโมชั่นพิเศษ วันนี้เท่านั้น!! | คลินิกทันตกรรมอลีนา - Aleena dental clinic"}
								src={"./image/promotion7.webp"}
								objectFit={"cover"}
								onClick={() => openImageViewer(4)}
							/>
						</SimpleGrid>
					</Container>
				</Box>
			</Box>

			{isViewerOpen && (
				<ImageViewer
					src={imagePromotion}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}
		</>
	);
}
