import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';

export default function SideBarLogo() {
    
    return (
        <div className='relative my-3 ml-8 py-1'>
            <Link to='/' className='inline-block p-2 text-2xl text-white rounded-full hover:bg-stone-800 transition'>
                <BsTwitter />
            </Link>
        </div>
    )
}
