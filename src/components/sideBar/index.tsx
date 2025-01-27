import { Link } from "react-router-dom"
import NavContent from "../navbar/navContent"

const DashboardSideBar = () => {
    return (
      <div className="fixed left-0 top-0 z-10 hidden h-screen  md:block pt-8">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="/logo.svg"/>
            </Link>
          </div>
          <div className="flex-1 pb-8">
            <nav className="flex h-full flex-col items-start justify-between px-2 text-sm font-medium lg:px-4">
             <NavContent/>
            </nav>
          </div>
        </div>
      </div>
    )
  }
  export default DashboardSideBar