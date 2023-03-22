import { FiHome, FiBell, FiUser } from 'react-icons/fi';

export const sideBar = [
    {
        label: 'Home',
        href: '/',
        icon: <FiHome />
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: <FiBell />
    },
    {
        label: 'Profile',
        href: '/user/:id',
        icon: <FiUser />
    }
];