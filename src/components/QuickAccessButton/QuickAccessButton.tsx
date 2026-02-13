import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Box, Typography, SvgIconProps } from '@mui/material';
import * as styles from './QuickAccessButton.styles';

interface QuickAccessButtonProps {
  icon: React.ElementType<SvgIconProps>;
  label: string;
  path: string;
  iconColor: string;
}

const QuickAccessButton: React.FC<QuickAccessButtonProps> = ({ icon: Icon, label, path, iconColor }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(path)}
      sx={styles.card}
    >
      <CardContent sx={styles.content}>
        <Box sx={styles.iconWrap}>
          <Icon sx={{ fontSize: 48, color: iconColor }} />
        </Box>
        <Typography variant="h6" component="div" sx={styles.label}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuickAccessButton;
