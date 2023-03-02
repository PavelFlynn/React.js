import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import '../css/sidebar.css';

const selectedCategory = 'New';

export default function SideBar() {

    return (
        <Stack
            direction='row'
            sx={{
                flexDirection: 'column',
                height: { sx: 'auto', md: '95%' },
                paddingRight: '10px',
                overflowY: 'auto'
            }}
        >
            {categories.map(category => (
                <button className='category-btn' key={category.name} style={{ backgroundColor: category.name === selectedCategory && '#FC1503' }}>
                    <span style={{ color: category.name === selectedCategory ? '#fff' : '#FC1503', marginRight: '15px' }}>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}

        </Stack>
    )

}
