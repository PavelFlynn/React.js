import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { sideBar } from '../utils/constants';

export default function SideBarItem() {
    
    return (
        <div className='relative my-3 py-1'>
            <div className='relative'>
                
                {sideBar.map(item => (
                    <Link to={item.href} key={item.label}>
                        <div className='relative m-4 py-3 px-4 rounded-full lg:hover:bg-stone-800 transition'>
                            <button className='relative flex justify-start items-center box-border'>
                                <span className='text-2xl mx-1 text-gray-50 max-lg:mx-3'>{item.icon}</span>
                                <span className='mx-1 text-base text-gray-50 max-lg:hidden'>{item.label}</span>
                            </button>
                        </div>
                    </Link>
                ))}

                <Link to='/logout'>
                    <div className='relative m-4 py-3 px-4 rounded-full lg:hover:bg-stone-800 transition'>
                        <button className='relative flex justify-start items-center'>
                            <span className='text-2xl mx-1 text-gray-50 max-lg:mx-3'>{<FiLogOut />}</span>
                            <span className='mx-1 text-base text-gray-50 max-lg:hidden'>Logout</span>
                        </button>
                    </div>
                </Link>

            </div>
        </div>
    )
}
