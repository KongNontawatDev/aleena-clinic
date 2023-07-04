import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Container,
	Image,
	LinkOverlay,
	LinkBox,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Facebook } from "react-feather";
export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box
			bg={"white"}
			color={"dark"}
			borderBottom={1}
			borderStyle={"solid"}
			borderColor={"gray.200"}
			position={"sticky"}
			top={0}
			zIndex={10000000}
		>
			<Container>
				<Flex
					minH={{ base: "50px", md: "65px" }}
					py={{ base: 2 }}
					px={{ base: 1, md: 4 }}
					align={"center"}
					justifyContent={"space-between"}
				>
					{/* logo */}
					<LinkBox>
						<LinkOverlay href="/">
							<Flex justify={{ base: "start" }} align={"center"}>
								<Image
									src="./image/logo.png"
									alt="logo"
									height={{ base: 39, md: 50 }}
									width={{ base: 39, md: 50 }}
								/>
								<Box ml={2}>
									<Text
										textAlign={"left"}
										fontFamily={"heading_logo"}
										fontWeight={700}
										fontSize={"xl"}
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
										fontSize={"xs"}
										color={"gray.600"}
										mt={-2}
										letterSpacing={0.3}
									>
										dental clinic
									</Text>
								</Box>
							</Flex>
						</LinkOverlay>
					</LinkBox>

					{/* menu */}
					<Flex display={{ base: "none", md: "flex" }}>
						<DesktopNav />
					</Flex>

					{/* icon */}
					<Flex
						justifyContent={"end"}
						mr={{ base: -2 }}
						display={{ base: "flex", md: "none" }}
					>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={4} h={4} />
								) : (
									<HamburgerIcon w={6} h={6} />
								)
							}
							variant={"ghost"}
							aria-label={"Toggle Navigation"}
						/>
					</Flex>
				</Flex>

				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
			</Container>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = "dark";
	const linkHoverColor = "primary.main";
	const popoverContentBgColor = "white";

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								as={NavLink}
								px={3}
								py={5}
								to={navItem.href ?? "#"}
								fontSize={"md"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
									bg: "primary.25",
								}}
								_activeLink={{
									bg: "primary.25",
									borderBottom: 3,
									borderStyle: "solid",
									borderColor: "primary.main",
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
			<Box>
				<IconButton
					as={Link}
					href="https://www.facebook.com/aleenadentalclinicyasothon"
					target="_blank"
					variant="ghost"
					color={"gray.500"}
					aria-label="facebook"
					fontSize="28px"
					icon={<Facebook />}
					size={"xs"}
				/>
			</Box>
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={"white"} p={4} display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();
	const linkHoverColor = "primary.main";
	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={NavLink}
				to={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
					color: linkHoverColor,
					bg: "primary.25",
				}}
				_activeLink={{
					bg: "primary.25",
					borderBottom: 2,
					borderStyle: "solid",
					borderColor: "primary.main",
				}}
			>
				<Text fontWeight={600} color={"dark"}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={"dark"}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "หน้าแรก",
		href: "/",
	},
	{
		label: "โปรโมชั่น",
		href: "/promotion",
	},
	{
		label: "บริการ",
		href: "/service",
	},
	{
		label: "เกี่ยวกับเรา",
		href: "/about",
	},
	{
		label: "ติดต่อเรา",
		href: "/contact",
	},
];
