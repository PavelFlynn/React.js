import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBar() {

    return (
        <Paper
            component='form'
            onSubmit={() => {}}
            sx={{
                pl: 2,
                border: '1px solid #e3e3e3',
                borderRadius: 20,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >

            <input type='text' value='' placeholder='Search...' className='search-bar' onChange={() => {}} style={{ border: 'none', background: 'none' }} />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>

        </Paper>
    )
    
}
