
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

type RouteButtonProps = {isCurrentRoute:boolean, path:string, name:string}
const RouteButton = ({isCurrentRoute, path, name}:RouteButtonProps) => {
    return (
        <Link className='block mb-4' to={path}>
        <Button variant={'ghost'} className={ `rounded-none ${isCurrentRoute ? ' border-[#D87023] border-l-[3px]' : ''}`}>
            {name}
        </Button>
        </Link>
    )
}

const sidebarRoutes = [
    {
        path:'/',
        name: 'Home'
    },
    {
        path:'/waitlist',
        name: 'Join waitlist'
    },
]

const socials = [
    {
        path:'/fb.svg',
        url:''
    },
    {
        path:'/twitter.svg',
        url:''
    },
    {
        path:'/ig.svg',
        url:''
    },
]

const NavContent = () => {
    const location = useLocation(); // Access location object
    const currentPath = location.pathname; // Get the current route path
  return (
    <div className='mt-10'> 
        {
            sidebarRoutes.map((route)=><RouteButton isCurrentRoute={route.path === currentPath} {...route}/>)
        }
    <div className='flex gap-2 mt-3 '>
        {
            socials.map((account)=><a>
                <img src={account.path}/>
            </a>)
        }
    </div>
    </div>
  )
}

export default NavContent