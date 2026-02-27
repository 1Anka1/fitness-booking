import { FaCalendar, FaDollarSign, FaUsers, FaUserTie } from 'react-icons/fa6';
import { theme } from '../../../theme/theme';

export const stats = [
  {
    id: 1,
    title: 'Total Users',
    value: '2,847',
    change: '↑ 12% from last month',
    positive: true,
    icon: <FaUsers size={20} />,
    color: theme.colors.statusInfo,
    bg: '#dbeafe',
  },
  {
    id: 2,
    title: 'Active Trainers',
    value: '47',
    change: '↑ 3 new this week',
    positive: true,
    icon: <FaUserTie size={20} />,
    color: theme.colors.statusSuccess,
    bg: '#dcfce7',
  },
  {
    id: 3,
    title: 'Sessions Today',
    value: '184',
    change: '− 8% from yesterday',
    positive: false,
    icon: <FaCalendar size={20} />,
    color: theme.colors.statusError,
    bg: '#ffedd5',
  },
  {
    id: 4,
    title: 'Revenue (Month)',
    value: '$28,450',
    change: '↑ 18% from last month',
    positive: true,
    icon: <FaDollarSign size={20} />,
    color: theme.colors.violetDark,
    bg: theme.colors.violetLight,
  },
];
