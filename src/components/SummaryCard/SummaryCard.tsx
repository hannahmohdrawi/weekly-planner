import React from 'react';
import { Card, CardContent, Box, Typography, SvgIconProps } from '@mui/material';
import * as styles from './SummaryCard.styles';

interface SummaryCardProps {
  icon: React.ElementType<SvgIconProps>;
  value: string | number;
  label: string;
  iconColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon: Icon, value, label, iconColor }) => {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Box sx={styles.iconWrap}>
          <Icon sx={{ fontSize: 48, color: iconColor }} />
        </Box>
        <Typography variant="h4" component="div" sx={styles.value}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={styles.label}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
