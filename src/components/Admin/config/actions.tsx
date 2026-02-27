import { MdPersonAddAlt1 } from 'react-icons/md';
import { theme } from '../../../theme/theme';
import { FaCalendar, FaFileExport, FaUserTie } from 'react-icons/fa6';

export const actions = [
  {
    id: 0,
    title: 'Add New User',
    icon: <MdPersonAddAlt1 size={20} />,
    color: theme.colors.primary,
    type: 'user',
  },
  {
    id: 1,
    title: 'Add New Trainer',
    icon: <FaUserTie size={20} />,
    color: theme.colors.statusSuccess,
    type: 'trainer',
  },
  {
    id: 2,
    title: 'Create Session',
    icon: <FaCalendar size={20} />,
    color: theme.colors.statusError,
    type: 'session',
  },
  {
    id: 3,
    title: 'Export Reports',
    icon: <FaFileExport size={20} />,
    color: theme.colors.violetDark,
    type: 'reports',
  },
];
