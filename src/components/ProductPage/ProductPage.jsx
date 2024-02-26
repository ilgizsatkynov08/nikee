import { Box } from '@mui/material';
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Header from '../Header/Header';
import ShoesTop from '../ShoesTop/ShoesTop';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const ProductPage = () => {
    return (
        <div className='container'>
            <Box>
            <NavigationBar />
      <Header />
      <ShoesTop />
      <SideBar/>
      <Footer/>
      </Box>

        </div>
    );
};

export default ProductPage;