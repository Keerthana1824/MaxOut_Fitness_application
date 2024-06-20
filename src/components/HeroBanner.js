import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import '../App.css'
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: "200px", xs: "60px" },
      ml: { sm: "50px" },
      position: "relative",
      p: "20px",
    }}>
      <Typography color="#FF2625" fontWeight="700" sx={{ fontSize: { lg: "60px", xs: "25px" }}}>
        MaxOut Fitness
      </Typography>
      <Typography fontWeight="700" sx={{ fontSize: { lg: "50px", xs: "35px" }}} mb="23px" mt="30px">
        Renew, Rebuild <br />  And Rise
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mt="10px" mb="20px">
        Discover the ultimate workout routines.
      </Typography>
      <Button variant='contained' color='error' href="#exercises" sx={{backgroundColor: "#ff2625", padding:"10px"}}>
        Explore Exercises
      </Button>
      <Typography
            fontWeight={600}
            color="#ff2625"
            sx={{
                opacity: 0.1,
                display:{lg:"block", xs: "none"}
            }}
            fontSize={"200px"}> Exercise </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
