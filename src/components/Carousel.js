import { makeStyles } from '@mui/styles'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import React from 'react'
import { TrendingCoins } from '../config/api'
import Axios from 'axios'
import { Container } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Crypto } from './../CryptoContext';

const useStyles = makeStyles(()=>({
  carousel:{
    height:'50%',
    display:'flex',
    alignItems:'center',
    // border:'1px solid red',
    paddingTop:50
  },
  carouselItems:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    cursor:'pointer',
    color:'white',
    textTransform:'uppercase'
  }
}))

const Carousel = () => {

  const [trending, setTrending] = useState([])
  const {currency,symbol} = useContext(Crypto)

const fetchCoins = async () => {
  const {data} = await Axios.get(TrendingCoins(currency))
  setTrending(data)
}

useEffect(() => {
fetchCoins();

},[currency])

  const classes= useStyles();

  const coins = trending.map((coin)=>{
    let profit = coin.price_change_percentage_24h > 0
    return (
    <Link className={classes.carouselItems} to='/coins/`${coin.id}`' style={{textDecoration:'none'}}>
      <img src={coin?.image} height='80' alt={coin.name}/>
      <span>{coin.symbol}</span>
      <span style={{ color: profit> 0 ?'green': 'red' }}>{profit && '+'}({coin.price_change_percentage_24h.toFixed(2)}%)</span>
      <span style={{fontSize:22, fontWeight:500}}>{symbol+' ' }{coin.current_price}</span>
    </Link>
  )})

  const responsive = {
    0:{
      items:2,
    },
    512:{
      items:4,
    }
  }

  return (
    <div className={classes.carousel}>
      <AliceCarousel
      autoPlayInterval={1000}
      infinite
      autoPlay
      disableDotsControls
      animationDuration={1500}
       responsive={responsive}
       disableButtonsControls
      mouseTracking
      items={coins}
      />
       </div>
  )
}

export default Carousel