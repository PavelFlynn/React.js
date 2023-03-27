import React from 'react';
import { SideBar, HomeBar, FollowBar } from './';
import { LoginModal } from '../modals/LoginModal';  

export default function Layout() {
    
    return (
        <>
        <LoginModal />

        <div className='relative flex h-screen justify-around items-start box-border'>

            <div className='relative h-screen flex-grow-0 flex-shrink basis-60 m-2 p-2 border-r border-solid border-gray-800 max-lg:basis-0'>
                <SideBar />
            </div>

            <div className='relative h-screen flex-1 m-2 p-2 px-0'>
                <HomeBar />
            </div>

            <div className='relative h-screen flex-grow-0 flex-shrink basis-72 m-2 p-2 pl-4 border-l border-solid border-gray-800 max-lg:hidden'>
                <FollowBar />
            </div>
            
        </div>
        </>
    )
}
