import React from 'react'
import DashboardSideBar from '../sideBar'
import DashboardNav from '../navbar'

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <div className="min-h-screen">
        <DashboardSideBar />
      <div className="flex flex-col pt-[70px] md:pt-8 pb-32 px-4 md:pl-[170px]">
        <DashboardNav />
        <main className="pb-10">{page}</main>
      </div>
     
    </div>
  )
}