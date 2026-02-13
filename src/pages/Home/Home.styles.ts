import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  py: 4,
};

export const title: SxProps<Theme> = {
  fontWeight: 'bold',
  mb: 2,
};

export const subtitle: SxProps<Theme> = {
  mb: 4,
  color: 'text.secondary',
};

export const summaryGrid: SxProps<Theme> = {
  mb: 5,
};

export const quickAccessTitle: SxProps<Theme> = {
  fontWeight: 'bold',
  mb: 3,
};

export const helpFab: SxProps<Theme> = {
  position: 'fixed',
  bottom: 16,
  right: 16,
};
