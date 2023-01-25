import React from "react";
import { AppBar, Toolbar } from "@mui/material";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import {Crypto} from "../CryptoContext";
import {
  Typography,
  Select,
  MenuItem,
  Container,
} from "@mui/material";

// const useStyles = makeStyles(()=>({
//     title: {
//         color:'gold',
//         fontWeight:'bold',
//         cursor:'pointer'
//     }
// }))

const Navbar = () => {
const {currency, setCurrency}= useContext(Crypto)
console.log(currency)
    // const classes= useStyles()
  return (
    <AppBar
    color="transparent"
    position='static'
      display="flex"
      sx={{ height: 85 }}
      border="2px solid red"
    >
      <Container>
        <Toolbar>
          
        <Typography variant="h6" sx={{ flex:1, margin: 2, fontWeight:'bold', fontSize:'2rem' }}>
          CryptoLand
        </Typography>
        <Select variant="outlined" value={currency} onChange={(e)=>setCurrency(e.target.value)} sx={{color:'white', width:100, height:50}}>
          <MenuItem value={"INR"}>INR</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
        </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
