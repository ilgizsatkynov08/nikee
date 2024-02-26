import React, { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Header from '../Header/Header';
import ShoesTop from '../ShoesTop/ShoesTop';
import Footer from '../Footer/Footer';
import { Box, Button, TextField } from '@mui/material';
import { useProduct } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Admin = () => {
  const { AddProduct } = useProduct();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);

  function handleChange() {
    let newObj = {
      name: name,
      image: image,
      type: type,
      price: price,
    };
    AddProduct(newObj);
  }

  return (
    <div className='container'>
      <NavigationBar />
      <Header />
      <ShoesTop />
      <Box>
        <Box className="a1">
          <TextField onChange={(e) => setImage(e.target.value)} id="outlined-basic" label="URL ..." variant="outlined" />
          <TextField onChange={(e) => setName(e.target.value)} id="outlined-basic" label="NAME" variant="outlined" />
          <TextField onChange={(e) => setPrice(e.target.value)} id="outlined-basic" label="PRICE" variant="outlined" />
          <TextField onChange={(e) => setType(e.target.value)} id="outlined-basic" label="TYPE" variant="outlined" />
          <Link to={"/"}>
          <Button onClick={handleChange} variant="contained">Contained</Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Admin;
