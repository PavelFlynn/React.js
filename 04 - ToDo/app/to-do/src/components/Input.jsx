import { TextField } from "@mui/material";

export default function Input() {

    return (
        <div className='relative'>
            <TextField 
                id='outlined-basic'
                label='What do you need to do?'
                variant='outlined'
                fullWidth
            />
        </div>
    )
}
