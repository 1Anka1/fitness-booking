import { BsGraphUp } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { FiCalendar, FiDollarSign, FiUserCheck, FiUsers } from 'react-icons/fi';
import { GiChampions } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { TbLogs } from 'react-icons/tb';

export const AdminNav = [
  {
    id: 0,
    title: 'Dashboard',
    href: '/admin',
    icon: <BsGraphUp />,
  },
  {
    id: 1,
    title: 'Users',
    href: '/admin/users',
    icon: <FaUsers />,
  },
  {
    id: 2,
    title: 'Trainers',
    href: '/admin/trainers',
    icon: <GiChampions />,
  },
  {
    id: 3,
    title: 'Sessions',
    href: '/admin/sessions',
    icon: <RiCalendarScheduleLine />,
  },
  {
    id: 4,
    title: 'Activity Logs',
    href: '/admin/logs',
    icon: <TbLogs />,
  },
  {
    id: 5,
    title: 'Settings',
    href: '/admin/settings',
    icon: <IoIosSettings />,
  },
];

export const stats = [
  {
    id: 1,
    title: 'Total Users',
    value: '2,847',
    change: '↑ 12% from last month',
    positive: true,
    icon: <FiUsers />,
    color: '#3b82f6',
    bg: '#dbeafe',
  },
  {
    id: 2,
    title: 'Active Trainers',
    value: '47',
    change: '↑ 3 new this week',
    positive: true,
    icon: <FiUserCheck />,
    color: '#16a34a',
    bg: '#dcfce7',
  },
  {
    id: 3,
    title: 'Sessions Today',
    value: '184',
    change: '− 8% from yesterday',
    positive: false,
    icon: <FiCalendar />,
    color: '#ea580c',
    bg: '#ffedd5',
  },
  {
    id: 4,
    title: 'Revenue (Month)',
    value: '$28,450',
    change: '↑ 18% from last month',
    positive: true,
    icon: <FiDollarSign />,
    color: '#7c3aed',
    bg: '#ede9fe',
  },
];
