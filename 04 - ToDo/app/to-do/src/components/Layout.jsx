import { Header, Input, ListItem, ListCheck, ListControls } from './';

export default function Layout() {
    
    return (
        <div className='relative flex flex-col justify-center items-center h-screen'>
            <div className='relative w-1/2 flex-grow-0 flex-shrink basis-auto p-8 bg-white rounded-lg shadow-md'>

                <Header label='Todo App' />
                <Input />
                <ListItem />
                <ListCheck />
                <ListControls />

            </div>
        </div>
    )
}
