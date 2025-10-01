import { Suspense } from 'react'
import { Box, Link } from '@chakra-ui/react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import EmptyLoading from '../../pages/EmptyLoading'
import Footer from '../shared/Footer'

type Props = {}

export default function Layout({}: Props) {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <Link 
        href="#main-content" 
        className="skip-link"
        position="absolute"
        top="-40px"
        left="6px"
        bg="primary.main"
        color="white"
        p={2}
        textDecoration="none"
        zIndex={1000}
        borderRadius="md"
        _focus={{
          top: "6px"
        }}
      >
        ข้ามไปยังเนื้อหาหลัก
      </Link>
      
      <Navbar />
      
      <Box as="main" id="main-content" role="main">
        <Suspense fallback={<EmptyLoading />}>
          <Outlet />
        </Suspense>
      </Box>
      
      <Footer />
    </>
  )
}