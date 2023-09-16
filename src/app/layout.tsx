import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Button from '@mui/material/Button';
import TopBar from '@/components/TopBar';
import './layout.css'

export const metadata = {
  title: 'Tan Guan Yu | Portfolio',
  description: 'Tan Guan Yu\'s Portfolio',
};

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Starred', href: '/starred', icon: StarIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <TopBar>
            <Box sx={{ 
              display: { xs: 'none', sm: 'block' }, 
              color: 'black' }}>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <Button sx={{ color: 'inherit' }} href={href}>
                  <Icon />
                  <Typography>{ text }</Typography>
                </Button>
              ))}
            </Box>
          </TopBar>
          <Box
            component='main'
            flexGrow='1'
            bgcolor='background.default'
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
