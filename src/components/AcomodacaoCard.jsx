import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const AcomodacaoCard = ({
  image,
  title,
  desc,
  configTitle,
  configDesc1,
  configDesc2,
  configDesc3,
  configDesc4,
  sizeTitle,
  sizeDesc,
  linkTo,
}) => {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: "345px",
          color: "white",
          backgroundColor: "#1a1a1a",
          border: "2px solid #000",
          padding: "2rem",
          margin: "2rem",
          borderRadius: "1rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: "1rem" }}
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
          />
          <CardContent sx={{ bgcolor: "#1A1A1A", color: "white" }}>
            <Typography gutterBottom variant="h4" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              {desc} <br />
              <br />
              <b>{configTitle}</b> <br />
              {configDesc1 ? configDesc1 : null} <br />
              {configDesc2 ? configDesc2 : null} <br />
              {configDesc3 ? configDesc3 : null} <br />
              {configDesc4 ? configDesc4 : null} <br />
              <b>{sizeTitle}</b> <br /> {sizeDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ bgcolor: "#1A1A1A" }}>
          <Link
            style={{ textDecoration: "none" }}
            href={`/acomodacoes/${linkTo}`}
          >
            <Button size="large" sx={{ color: "#eb5322" }}>
              Ver Mais
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AcomodacaoCard;
