import React from 'react';
import {Stack, Avatar, Card, CardContent, Divider, Typography } from '@mui/material';

const TableComment = ({ author, content, timestamp }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <Avatar />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            {author}
          </Typography>
        </div>
        <Stack
  direction="row"
  justifyContent="space-around"
  alignItems=""
  spacing={2}
>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
          {timestamp.slice(0,10)}
        </Typography>
        </Stack>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default TableComment;
