import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Box, Typography } from '@mui/material';

const QuickAccessButton = ({ icon: Icon, label, path, iconColor }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(path)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        boxShadow: 2,
        borderRadius: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ fontSize: 48, color: iconColor }} />
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'medium', textAlign: 'center' }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuickAccessButton;
