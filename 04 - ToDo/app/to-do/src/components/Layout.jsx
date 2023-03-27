import { Header, Input } from './';

export default function Layout() {
    
    return (
        <div className='relative flex flex-col justify-center items-center h-screen'>
            <div className='relative flex-grow-0 flex-shrink basis-auto p-5 bg-white rounded-lg shadow-md'>

                <Header label='Todo App' />
                <Input />

            </div>
        </div>
    )
}
