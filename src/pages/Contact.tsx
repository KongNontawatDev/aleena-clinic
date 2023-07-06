import { useEffect } from "react";
import {
	AspectRatio,
	Box,
	Container,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Mail, MapPin, PhoneCall } from "react-feather";

type Props = {};

export default function Contact({}: Props) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<Box>
				<Container py={12}>
					<Heading
						size={{ base: "lg", md: "xl" }}
						mb={6}
						textAlign={"center"}
						data-aos="fade-up"
					>
						#ที่อยู่คลินิกทันตกรรมอลีนา <br></br>
						<Text as={"span"} color={"primary.main"}>
							สาขาเมืองยโสธร
						</Text>
					</Heading>
					<Flex
						justify={"center"}
						data-aos="fade-up"
						mb={8}
						as={Link}
						href="https://liff.line.me/1645278921-kWRPP32q/?accountId=727lfbti"
						target="_blank"
					>
						<Image
							rounded={"3xl"}
							maxHeight={'xl'}
							alt={"feature image"}
							src={"./image/contact1.webp"}
							objectFit={"cover"}
						/>
					</Flex>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
						<Flex data-aos="fade-right">
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
								src={"./image/opened2.webp"}
								objectFit={"cover"}
							/>
						</Flex>
					</SimpleGrid>

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.3310938216746!2d104.14939687582773!3d15.786486446943728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3117ced486d425a5%3A0x3d0f672ff0af9d3!2z4LiE4Lil4Li04LiZ4Li04LiB4LiX4Lix4LiZ4LiV4LiB4Lij4Lij4Lih4Lit4Lil4Li14LiZ4LiyIOC4quC4suC4guC4suC5gOC4oeC4t-C4reC4hyDguKLguYLguKrguJjguKMgLSBBbGVlbmEgRGVudGFsIENsaW5pYyAo4Liq4Lih4Liy4Lii4Lil4LmM4LmA4LiU4Li04LihKQ!5e0!3m2!1sth!2sth!4v1688453964083!5m2!1sth!2sth"
						width="100%"
						height="500"
						style={{ border: 0, borderRadius: "1.5rem" }}
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						data-aos="fade-up"
					></iframe>
				</Container>
			</Box>

			<Box bg={"primary.25"} data-aos="fade-up">
				<Container py={12}>
					<Stack spacing={0}>
						<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
							คลินิกทันตกรรมอลีนา สาขาเมืองยโสธร{" "}
						</Heading>
						<Stack mt={2} ml={6}>
							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<MapPin />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									ตั้งอยู่ที่ 658 ถนนแจ้งสนิท ตำบลในเมือง อำเภอเมือง
									จังหวัดยโสธร รหัสไปรษณีย์ 35000
								</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<PhoneCall />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>098 356 3711</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<Facebook />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									<Link
										href="https://www.facebook.com/aleenadentalclinicyasothon"
										textDecoration={"underline"}
									>
										เพจเฟสบุ๊ค คลิก!
									</Link>
								</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<Mail />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									aleenadent@gmail.com
								</Text>
							</Stack>
						</Stack>
					</Stack>
					<Divider my={4} />

					<Stack spacing={0}>
						<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
							คลินิกทันตกรรมอลีนา สาขาเลิงนกทา{" "}
						</Heading>
						<Stack mt={2} ml={6}>
							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<MapPin />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									ตั้งอยู่ที่ 651/5 หมู่12 ปั้มน้ำมัน ปตท สามแยก อำเภอเลิงนกทา
									จังหวัดยโสธร รหัสไปรษณีย์ 35120
								</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<PhoneCall />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>094 039 2396</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<Facebook />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									<Link
										href="https://www.facebook.com/Aleenadent"
										textDecoration={"underline"}
									>
										เพจเฟสบุ๊ค คลิก!
									</Link>
								</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<Mail />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									aleenadent@gmail.com
								</Text>
							</Stack>
						</Stack>
					</Stack>
					<Divider my={4} />

					<Stack spacing={0}>
						<Heading size={{ base: "lg", md: "xl" }} color={"primary.main"}>
							คลินิกทันตกรรมอลีนา สาขาเสลภูมิ{" "}
						</Heading>
						<Stack mt={2} ml={6}>
							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<MapPin />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									ตั้งอยู่ที่ ปั้ม ปตท.ทองทวีปิโตรเลียมเสลภูมิ ตำบลขวัญเมือง
									อำเภอเสลภูมิ ร้อยเอ็ด 45120
								</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<PhoneCall />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>091 834 6026</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<Facebook />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									<Link
										href="https://www.facebook.com/AleenaSelaphum"
										textDecoration={"underline"}
									>
										เพจเฟสบุ๊ค คลิก!
									</Link>
								</Text>
							</Stack>

							<Stack direction={"row"}>
								<Flex
									w={8}
									h={8}
									align={"center"}
									justify={"center"}
									rounded={"full"}
								>
									<Mail />
								</Flex>
								<Text fontSize={{ base: "md", md: "lg" }}>
									aleenadent@gmail.com
								</Text>
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
