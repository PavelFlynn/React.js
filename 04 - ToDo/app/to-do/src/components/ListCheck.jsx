import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { AutoFixHighOutlined } from '@mui/icons-material';

export default function ListCheck(props) {

    return (
        <>
        {props.items.length > 0 ? (
        <div className='relative my-1 py-2 border-t border-solid border-slate-300'>
            <div className='relative flex justify-between items-center my-2'>
                <div>
                    <Button 
                        onClick={ () => alert('clicked') }
                        variant='outlined' 
                        size='small'
                        sx={{ 
                            color: 'rgb(100 116 139)',
                            textTransform: 'capitalize',
                            borderRadius: '8px',
                            border: '1px solid rgb(148 163 184)'
                        }}
                    >
                        Check All
                    </Button>
                </div>
                <div>
                    <p className='text-sm text-slate-500'>{props.items.length} {(props.items.length > 1) ? 'items' : 'item'} remaining</p>
                </div>
            </div>
        </div>
        
        ) : (

        <div className='relative m-1 py-4 text-center'>
            <AutoFixHighOutlined 
                sx={{
                    padding: '5px',
                    fontSize: '60px',
                    color: '#475569',
                    stroke: '#475569',
                    strokeWidth: 0.1,
                    opacity: 0.5,
                }}
            />
            <p className='text-sm text-slate-500'>Your day is free!. What about adding a new task...</p>
        </div>

        )}
        </>
    )
}
