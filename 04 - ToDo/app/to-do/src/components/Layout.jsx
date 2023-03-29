import { useState } from 'react';
import { Header, Input, ListItem, ListCheck, ListControls } from './';

export default function Layout() {
    
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Fist To do Item',
            isCompleted: false,
            isEdited: false
        },
        {
            id: 2,
            title: 'Second To do Item',
            isCompleted: false,
            isEdited: false
        },
    ]);
    
    return (
        <div className='relative flex flex-col justify-center items-center h-screen'>
            <div className='relative w-2/5 flex-grow-0 flex-shrink basis-auto p-8 bg-white rounded-lg shadow-md'>

                <Header label='Todo App' />
                <Input items={todos} setItems={setTodos} />
                <ListItem items={todos} setItems={setTodos} />
                <ListCheck items={todos} />
                <ListControls items={todos} />

            </div>
        </div>
    )
}
