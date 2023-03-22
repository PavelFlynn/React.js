import { SideBarLogo, SideBarItem, SideBarTweet } from './';

export default function SideBar() {
    
    return (
        <div className='relative h-full m-1 p-1'>
            <SideBarLogo />
            <SideBarItem />
            <SideBarTweet />
        </div>
    )
}
