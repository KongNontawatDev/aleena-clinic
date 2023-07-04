import {Suspense} from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import EmptyLoading from '../../pages/EmptyLoading'
import Footer from '../shared/Footer'

type Props = {}

export default function Layout({}: Props) {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<EmptyLoading />}>
      <Outlet/>
      <Footer/>
		</Suspense>

    </>
  )
}