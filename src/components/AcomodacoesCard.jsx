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

const AcomodacoesCard = ({
  src,
  title,
  desc,
  configTitle,
  configDesc,
  configDesc1,
  configDesc2,
  sizeTitle,
  sizeDesc,
  goTo,
}) => {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: "345px",
          color: "white",
          border: "2px solid #000",
          boxShadow: "5px 2px 30px -8px rgba(0,0,0,0.75)",
          backgroundColor: "#1a1a1a",
          padding: "2rem",
          margin: "2rem",
          borderRadius: "1rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: "1rem" }}
            component="img"
            alt="Suíte Simples"
            height="140"
            image={src}
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
              {configDesc} <br />
              {configDesc1 ? configDesc1 : null} <br />
              {configDesc2 ? configDesc2 : null} <br />
              <b>{sizeTitle}</b> <br /> {sizeDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ bgcolor: "#1A1A1A" }}>
          <Link
            style={{ textDecoration: "none" }}
            href={goTo ? `/acomodacoes/${goTo}` : "/acomodacoes"}
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

export default AcomodacoesCard;
