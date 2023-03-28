import styled from '@emotion/styled';
import { Button } from '@mui/material';

export default function ListCheck() {

    return (
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
                            border: '1px solid rgb(148 163 184)',
                            '&:focus': {
                                border: '1px solid rgb(148 163 184)'
                            },
                            '&:active': {
                                border: '1px solid rgb(148 163 184)',
                                background: 'none'
                            }
                        }}
                    >
                        Check All
                    </Button>
                </div>
                <div>
                    <p className='text-slate-500'>3 items remaining</p>
                </div>
            </div>
        </div>
    )
}
