import React from 'react'
import { Outlet } from 'react-router-dom'
import Filter from '../components/Filter'
import TableComponent from '../components/TableComponent'

const Crypto = () => {
  return (
    <section
      className='w-[90%] h-full flex flex-col mt-5 lg:mt-10 mb-24 relative'
    >
      <Filter />
      <TableComponent />
      <Outlet />
    </section>
  )
}

export default Crypto