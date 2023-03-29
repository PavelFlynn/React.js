import { ButtonGroup, Button } from '@mui/material';

export default function ListControls(props) {

    return (
        <>
        {props.items.length > 0 && (
        <div className='relative my-1 py-2 border-t border-solid border-slate-300'>
            <div className='relative flex justify-between items-center my-2'>

                <div>
                    <div className='relative flex justify-start items-center'>
                        <ButtonGroup 
                            variant='outlined' 
                            aria-label='outlined button group' 
                            size='small'
                        >
                            
                            <Button 
                                onClick={ () => alert('clicked') }
                                sx={{ 
                                    color: 'rgb(100 116 139)',
                                    textTransform: 'capitalize',
                                    border: '1px solid rgb(148 163 184)',
                                    borderRadius: '8px',
                                }}
                            >
                            All
                            </Button>

                            <Button 
                                onClick={ () => alert('clicked') }
                                sx={{ 
                                    color: 'rgb(100 116 139)',
                                    textTransform: 'capitalize',
                                    border: '1px solid rgb(148 163 184)'
                                }}
                            >
                            Active
                            </Button>

                            <Button 
                                onClick={ () => alert('clicked') }
                                sx={{ 
                                    color: 'rgb(100 116 139)',
                                    textTransform: 'capitalize',
                                    border: '1px solid rgb(148 163 184)',
                                    borderRadius: '8px',
                                }}
                            >
                            Completed
                            </Button>
                        </ButtonGroup>
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
                            border: '1px solid rgb(148 163 184)'
                        }}
                    >
                        Clear completed
                    </Button>
                </div>

            </div>
        </div>
        )}
        </>
    )
}
