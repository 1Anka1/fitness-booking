import { BsGraphUp } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { GiChampions } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { TbLogs } from 'react-icons/tb';

export const navigation = [
  {
    id: 0,
    title: 'Dashboard',
    to: '/admin',
    icon: <BsGraphUp />,
  },
  {
    id: 1,
    title: 'Users',
    to: '/admin/users',
    icon: <FaUsers />,
  },
  {
    id: 2,
    title: 'Trainers',
    to: '/admin/trainers',
    icon: <GiChampions />,
  },
  {
    id: 3,
    title: 'Sessions',
    to: '/admin/sessions',
    icon: <RiCalendarScheduleLine />,
  },
  {
    id: 4,
    title: 'Activity Logs',
    to: '/admin/logs',
    icon: <TbLogs />,
  },
  {
    id: 5,
    title: 'Settings',
    to: '/admin/settings',
    icon: <IoIosSettings />,
  },
];
