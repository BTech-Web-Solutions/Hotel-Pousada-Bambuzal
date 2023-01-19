import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 500,
        img: {
          borderRadius: '10px',
          boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        }
      }}
      variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/1.jpg?raw=true',
    title: 'Entrada',
  },
  {
    img: 'https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/2.jpg?raw=true',
    title: 'Chalé Duplo',
  },
  {
    img: 'https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/3.jpg?raw=true',
    title: 'Piscina',
  },
  {
    img: 'https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/4.jpg?raw=true',
    title: 'Varanda',
  },
  {
    img: 'https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/5.jpg?raw=true',
    title: 'Beira da Piscina',
  },
  {
    img: 'https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ImageList/6.jpg?raw=true',
    title: 'Area',
  },
];