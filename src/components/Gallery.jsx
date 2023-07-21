import React from "react";
import {
  Typography,
  Grid,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

const Gallery = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <Container className="card">
        <Grid className="cardGrid" container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  className="cardMedia"
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
                <CardContent className="cardContent">
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, voluptatem!
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    View
                  </Button> */}
                  <VisibilityIcon className="icon">View</VisibilityIcon>
                  {/* <Button size="small" color="primary">
                    Edit
                  </Button> */}
                  <EditIcon className="icon">Edit</EditIcon>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Gallery;
