import React from 'react';
import { SideBar, FollowBar } from './';

export default function Layout() {
    
    return (
        <div className='relative flex h-screen justify-around items-start box-border'>

            <div className='relative flex-grow-0 flex-shrink basis-64 m-2 p-2 max-lg:basis-0'>
                <SideBar />
            </div>

            <div className='relative flex-1 m-2 p-2 bg-stone-800'></div>

            <div className='relative flex-grow-0 flex-shrink basis-72 m-2 p-2 bg-stone-800'>
                <FollowBar />
            </div>
            
        </div>
    )
}
