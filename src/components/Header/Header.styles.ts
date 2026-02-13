import { SxProps, Theme } from '@mui/material';

export const appBar: SxProps<Theme> = {
  backgroundColor: '#fff',
  color: '#333',
  boxShadow: 1,
};

export const brand: SxProps<Theme> = {
  flexGrow: 0,
  fontWeight: 'bold',
  color: '#1976d2',
  mr: 4,
};

export const navContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
  flexGrow: 1,
};

export const navButton = (isActive: boolean): SxProps<Theme> => ({
  color: isActive ? '#1976d2' : '#666',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid #1976d2' : 'none',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.08)',
  },
});
