import React,{Suspense} from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import EmptyLoading from '../../pages/EmptyLoading'

type Props = {}

export default function Layout({}: Props) {
  return (
    <>
    <Suspense fallback={<EmptyLoading />}>
			<Navbar/>
      <Outlet/>
		</Suspense>

    </>
  )
}