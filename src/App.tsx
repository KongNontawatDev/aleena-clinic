import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import Fonts from "./components/layouts/Fonts";
import theme from "./components/layouts/theme";

// pages
import Layout from "./components/layouts/Layout";
const Home = lazy(() => import("./pages/Home"));
const Promotion = lazy(() => import("./pages/Promotion"));
const Service = lazy(() => import("./pages/Service"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
function App() {
	return (
		<HelmetProvider>
			<ChakraProvider theme={theme}>
				<Fonts />
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route index path="/" element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/promotion" element={<Promotion />} />
							<Route path="/service" element={<Service />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />

							<Route path="*" element={<Pagenotfound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</HelmetProvider>
	);
}

export default App;
