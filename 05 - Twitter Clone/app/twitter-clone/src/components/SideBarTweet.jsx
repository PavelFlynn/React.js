import { FiFeather } from "react-icons/fi";

export default function SideBarTweet() {
    
    return (
        <div className='relative my-3 py-1'>
            <div className='relative'>
                
                <div className='relative m-4 py-2 px-4 text-center rounded-full bg-sky-500 hover:bg-sky-600 cursor-pointer transition max-lg:hidden'>
                    <button className='relative'>
                        <span className='mx-1 text-base text-gray-50'>Tweet</span>
                    </button>
                </div>

                <div className='relative m-4 py-2 px-4 text-center lg:hidden'>
                    <button className='relative flex justify-center items-center px-2 py-3 rounded-full bg-sky-500 hover:bg-sky-600 cursor-pointer transition'>
                        <span className='text-2xl mx-1 text-gray-50'>{<FiFeather />}</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
