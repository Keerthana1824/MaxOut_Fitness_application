import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack direction="row" gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="500px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '75px', height: '75px' }} />
      <Typography variant="h5"  sx={{ fontSize: { lg: '18px', xs: '15px' } }} fontFamily="roboto" mt="41px" mb= "40px" color={"gray"}>All Rights Reserved @Keerthana1824</Typography>
      </Stack>
  </Box>
);

export default Footer;