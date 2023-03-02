import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';

export default function Feed() {
    
    return (
        <Stack sx={{ direction: { sx: 'column', md: 'row' }}}>
            
            <Box 
                sx={{
                    width: '180px',
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid #3d3d3d', 
                    px: { sx: 0, md: 2 },
                    backgroundColor: 'red'
                }}
            >
                
                <SideBar />

                <Typography variant='body2' sx={{ mt: 1.5, color: '#fff', fontSize: 12, textAlign: 'center' }} className='copyright'>
                    Copyright 2023 Youtube Clone
                </Typography>

            </Box>

            <Box 
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    p: '10px',
                    backgroundColor: 'blue'
                }}
            >

                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    New <span style={{ color: '#F31503' }}>videos</span>
                </Typography>

            </Box>

        </Stack>
    )

}
