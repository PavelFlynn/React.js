import { Checkbox } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function ListItem(props) {

    function deleteItem(id) {
        props.setItems([...props.items].filter(item => item.id !== id));
    }

    return (
        <div className='relative my-4'>

            {props.items.map(item => (
            <div className='relative flex justify-between items-center my-2' key={item.id}>
                <div className='relative flex-grow-0 flex-shrink basis-11 text-cente'>
                    <Checkbox />
                </div>
                <div className='relative flex-1 px-1 text-left'>
                    <p className={item.isCompleted ? 'line-through' : null}>{item.title}</p>
                </div>
                <div className='relative flex-grow-0 flex-shrink basis-8 text-cente'>
                    <ClearOutlinedIcon
                        onClick={() => deleteItem(item.id)}
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
            ))}

        </div>
    )
}
