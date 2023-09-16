'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import DashboardIcon from '@mui/icons-material/Dashboard';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export default function TopBar(props: Props) : JSX.Element {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar sx={{ backgroundColor: 'background.paper' }}>
          <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
          <Typography variant="h6" noWrap component="div" color="black" sx={{ flexGrow: 1 }}>
            Tan Guan Yu
          </Typography>
          { props.children }
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
