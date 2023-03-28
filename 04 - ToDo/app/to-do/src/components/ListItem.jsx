import { Checkbox } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function ListItem() {

    return (
        <div className='relative my-4'>

            <div className='relative flex justify-between items-center my-2'>
                <div className='relative flex-grow-0 flex-shrink basis-11 text-cente'>
                    <Checkbox />
                </div>
                <div className='relative flex-1 px-1 text-left'>
                    <p>Item</p>
                </div>
                <div className='relative flex-grow-0 flex-shrink basis-8 text-cente'>
                    <ClearOutlinedIcon
                        sx={{
                            padding: '5px',
                            fontSize: '30px',
                            color: '#475569',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            opacity: 0.6,
                            '&:hover': {
                                opacity: 1
                            }
                        }}
                    />
                </div>
            </div>

        </div>
    )
}
