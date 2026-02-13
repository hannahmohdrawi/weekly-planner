import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  py: 4,
};

export const title: SxProps<Theme> = {
  fontWeight: 'bold',
  mb: 2,
};

export const grid: SxProps<Theme> = {
  mt: 3,
};

export const card: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
};

export const cardContent: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  p: 2,
};

export const cardMedia: SxProps<Theme> = {
  width: 140,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  objectFit: 'cover',
};

export const cardTitle: SxProps<Theme> = {
  fontWeight: 'bold',
  mb: 1,
};

export const cardDescription: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: 14,
};
