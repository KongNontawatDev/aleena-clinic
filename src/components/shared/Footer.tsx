import {
	Box,
	Button,
	Container,
	Flex,
	Image,
	Link,
	LinkBox,
	LinkOverlay,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from "@chakra-ui/react";
import { Facebook } from "react-feather";



export default function Footer() {

	return (
		<Box bg={"primary.50"} color={useColorModeValue("gray.700", "gray.200")}>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				spacing={4}
				justify={"center"}
				align={"center"}
			>
				<LinkBox>
					<LinkOverlay href="/">
						<Flex justify={{ base: "start" }} align={"center"}>
							<Image
								src="./image/logo.png"
								alt="logo"
								height={{ base: 50, md: 68 }}
								width={{ base: 50, md: 68 }}
								p={1}
								rounded={"full"}
								bg={"white"}
							/>
							<Box ml={2}>
								<Text
									textAlign={"left"}
									fontFamily={"heading_logo"}
									fontWeight={700}
									fontSize={{ base: "2xl", md: "3xl" }}
									color={"primary.main"}
								>
									aleena
								</Text>
								<Text
									textAlign={useBreakpointValue({
										base: "center",
										md: "left",
									})}
									fontFamily={"body_logo"}
									fontSize={{ base: "xl", md: "2xl" }}
									color={"gray.600"}
									mt={-2}
								>
									dental clinic
								</Text>
							</Box>
						</Flex>
					</LinkOverlay>
				</LinkBox>
				<Stack direction={"row"} spacing={6} wrap={"wrap"} justify={"center"}>
					<Link href={"/"}>หน้าแรก</Link>
					<Link href={"/promotion"}>โปรโมชั่น</Link>
					<Link href={"/service"}>บริการ</Link>
					<Link href={"/about"}>เกี่ยวกับเรา</Link>
					<Link href={"/contact"}>ติดต่อเรา</Link>
				</Stack>
			</Container>

			<Box
				bg={"primary.main"}
				color={"white"}
				borderTopWidth={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.700")}
			>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ base: "center", md: "space-between" }}
					align={{ base: "center", md: "center" }}
				>
					<Text fontFamily={"mono"}>
						© 2023{" "}
						<Link
							textDecoration={"underline"}
							target="_blank"
							href="https://www.facebook.com/kongnontawat.dev"
						>
							Kong Nontawat
						</Link>
						. All rights reserved.
					</Text>
					<Stack direction={"row"} spacing={6}>
						<Button
              as={Link}
              target="_blank"
              rounded={'full'}
              px={2}
              variant={'outline'}
              borderWidth={2}
              color={'white'}
							href={"https://www.facebook.com/aleenadentalclinicyasothon"}
						>
							<Facebook />
						</Button>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}
