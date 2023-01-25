import { Container, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
// import bg from './bg.jpg'
import Carousel from './Carousel';

const useStyles= makeStyles(()=>({
    banner:{
        backgroundImage: `url('./bg1.jpg')`,
        opacity:'0.97'
        // height:'100vh'
    },
    bannerContent:{
        display:'flex',
        color:'white',
        flexDirection:'column',
        justifyContent:'space-around',
        height:450,
        paddingTop:35
    },
    tagLine:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        // height:'60%'
    }
}))
const Banner = () => {
   const classes = useStyles()
  return (
     <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagLine}>
            <Typography variant='h2' style={{fontWeight:'bold', marginBottom:35}}>
                CryptoLand
            </Typography>
            <Typography variant='' style={{color:'grey'}}>
                Welcome to the world of CryptoCurrencies
            </Typography>
            </div>
            <Carousel/>

        </Container>
     </div>
  )
}

export default Banner