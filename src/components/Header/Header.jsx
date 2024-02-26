import React from "react";
import logo from "../../image/nike.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

    const navigate =useNavigate();
  const navLink = [
    "New & Featured",
    "Men",
    "Woman",
    "Kids",
    "Sale",
    "Customise",
    "SNKRS",
    
  ]; 
  return (
    <Box id="header">
      <Box className="container">
 
        <Box className="header">

          <Avatar onClick={()=>navigate("/")}
            sx={{ width: "78.47px", height: "78.47px", p: 0, m: 0 }}
            alt="Nike"
            src={logo}
          />
          <Box className="header_nav">
            {navLink.map((i, index) => (
              <Typography key={index}>{i}</Typography>
            ))}
          </Box>
          <Box  className="header_icons">
            <IconButton onClick={()=>navigate("/admin")}>
              <AddIcon  style={{fontSize: "40px"}} />
            </IconButton>
            <Search sx={{ background: "#F5F5F5", borderRadius: "100px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <FavoriteBorderOutlinedIcon />
            <LocalMallOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
