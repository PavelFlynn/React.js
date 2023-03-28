import { Button } from '@mui/material';

export default function ListControls() {

    return (
        <div className='relative my-1 py-2 border-t border-solid border-slate-300'>
            <div className='relative flex justify-between items-center my-2'>

                <div>
                    <div className='relative flex justify-start items-center'>
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
                        All
                    </Button>

                    <Button 
                        onClick={ () => alert('clicked') }
                        variant='outlined' 
                        size='small'
                        sx={{ 
                            margin: '0 5px',
                            color: 'rgb(100 116 139)',
                            textTransform: 'capitalize',
                            borderRadius: '8px',
                            border: 'none',
                            '&:focus': {
                                border: '1px solid rgb(148 163 184)'
                            },
                            '&:active': {
                                border: '1px solid rgb(148 163 184)',
                                background: 'none'
                            }
                        }}
                    >
                        Active
                    </Button>

                    <Button 
                        onClick={ () => alert('clicked') }
                        variant='outlined' 
                        size='small'
                        sx={{ 
                            color: 'rgb(100 116 139)',
                            textTransform: 'capitalize',
                            borderRadius: '8px',
                            border: 'none',
                            '&:focus': {
                                border: '1px solid rgb(148 163 184)'
                            },
                            '&:active': {
                                border: '1px solid rgb(148 163 184)',
                                background: 'none'
                            }
                        }}
                    >
                        Completed
                    </Button>
                    </div>
                </div>

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
                        Clear completed
                    </Button>
                </div>

            </div>
        </div>
    )
}
