import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = Object.freeze({
  space: [0, 5, 8, 16, 32, 56, 74, 128, 256, 450],

  fonts: {
    body: 'Inter, serif',
  },

  fontSizes: {
    xxs: 6,
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },

  fontWeights: {
    light: 200,
    normal: 400,
    lightMedium: 500,
    medium: 700,
    bold: 900,
  },

  colors: {
    primary: '#0284C7',
    primaryLight: '#F0F9FF',
    background: '#F9FAFB',
    backgroundDark: '#0a76ac',
    textPrimary: '#111827',
    textSecondary: '#4B5563',
    label: '#374151',
    textMuted: '#9CA3AF',
    sideBorder: '#E5E7EB',

    border: '#E5E7EB',
    borderDark: '#D1D5DB',

    black: '#000000',
    white: '#FFFFFF',

    statusInfo: '#3B82F6',
    statusWarning: '#FACC15',
    statusSuccess: '#4ADE80',
    statusError: '#F87171',
  },

  radius: {
    none: '0',
    round: '8px',
  },

  cubic: {
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
