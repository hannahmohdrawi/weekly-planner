import { SxProps, Theme } from '@mui/material';

export const card: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 2,
  borderRadius: 2,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: 4,
  },
};

export const content: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  p: 3,
};

export const iconWrap: SxProps<Theme> = {
  mb: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const value: SxProps<Theme> = {
  fontWeight: 'bold',
  mb: 1,
};

export const label: SxProps<Theme> = {
  textAlign: 'center',
};
