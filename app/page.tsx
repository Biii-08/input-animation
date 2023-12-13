import Image from 'next/image'
import Animation from './Animation'
import AnimatedPagination from './Pagination'
import Pagination from './Pagination'
import CurvedLine from './CurvedLine'
import Curved from './Curved'

export default function Home() {
  return (
  <>
  <Animation/>
  {/* <AnimatedPagination/> */}
  <Pagination/>
  {/* <CurvedLine/> */}
  <Curved/>
  </>
  )
}
