import React from "react";
import SideBar from "../SideBar/SideBar";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import ShoesTop from "../ShoesTop/ShoesTop";
import ProductList from "../ProductList/ProductList";
import NavigationBar from "../NavigationBar/NavigationBar";

const MainPage = () => {
  return (
    <Box className="container">
      <NavigationBar/>
      <Header/>
      <ShoesTop/>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "30px",
        }}
      >
        <SideBar />
        <ProductList/>
      </Box>
    </Box>
  );
};

export default MainPage;
