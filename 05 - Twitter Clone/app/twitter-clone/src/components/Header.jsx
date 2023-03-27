import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Header(props) {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className='relative mb-6 pb-5 border-b border-solid border-gray-700'>
            <div className='relative flex justify-start items-center'>
                {props.label !== 'Home' &&
                <FiArrowLeft 
                    onClick={handleBack}
                    color='white'
                    size={20}
                    className='mr-2 cursor-pointer hover:opacity-70 transition'
                />
                }
                <h2 className='text-white font-semibold'>{props.label}</h2>
            </div>
        </div>
    )
}
