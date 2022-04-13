import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../todo/routes/routesName';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export const ResponsiveAppBar = ({ title = 'TODO APP', showBackBtn = true }) => {

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            showBackBtn &&
            <IconButton onClick={() => navigate(-1)} style={{ marginRight: 10, color: 'white' }}>
              <ArrowBackIcon />
            </IconButton>
          }

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={() => navigate(routeNames.ABOUT)} sx={{ p: 0 }}>
                <Avatar alt="Harith" src={`${process.env.PUBLIC_URL}/assets/images/rith.png`} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};