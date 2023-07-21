import React from "react";
import { Typography, Grid, Container, Button } from "@mui/material";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container">
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            My Photo Gallery
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            vitae aperiam! Excepturi repudiandae accusamus, aliquid distinctio
            autem consequuntur ipsam quisquam.
          </Typography>

          {/* Buttons */}
          <div className="buttons">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See more photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Follow Me
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
