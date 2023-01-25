import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { CoinList } from '../config/api'
import { useContext } from 'react';
import { Crypto } from '../CryptoContext';
import { makeStyles } from '@mui/styles'
import { Container, TableCell,Table, TableHead, TableRow, TextField, Typography, TableBody, TableContainer, Pagination } from '@mui/material';

const useStyles = makeStyles(()=>({
    row:{
        // backgroundColor:'lightblue',
        cursor:'pointer',
        "&:hover":{backgroundColor:'lightgray'}
    }
}))
const CoinTable = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const {currency,symbol} = useContext(Crypto)

    const fetchList = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency))
        setCoins(data)
        setLoading(false)
    }
    console.log(coins)
    const classes= useStyles()

    const handleSearch=()=>{
        return coins.filter((coin)=>(
            coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
        ))
    }

    useEffect(()=>{
        
        fetchList()
       
    },[currency])

  return (
    <Container>
        <Typography variant='h4' align='center' fontWeight='bold' paddingTop='2rem'>
            CryptoCurrency prices by Market Cap
        </Typography>
        <TextField label="Search for a crypto..." variant='outlined' style={{width:'100%', margin:25, marginBottom:50}}
        onChange={(e)=>setSearch(e.target.value)}
        onClick={handleSearch}
        />
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    {['Coin', 'Current Price','24h Change', 'Market Cap'].map((i) => <TableCell align={i==='Coin' ? "": 'right'} style={{fontWeight:'bold', fontSize:'large',backgroundColor:'gray'}}>{i}</TableCell>)}
                </TableRow>
            </TableHead>

            <TableBody>
                {handleSearch()
                .slice((page-1)*10, (page-1)*10+10)
                .map((item)=>{
                    let profit= item.price_change_percentage_24h > 0
                    return (<TableRow className={classes.row}>
                        <TableCell style={{display:'flex', gap:20}}><img src={item.image} height='50'alt={item.name}/>
                        <div style={{display:'flex', flexDirection:'column'}}>
                           <span style={{textTransform:'uppercase', fontSize:22}}>{item.symbol}</span>
                           <span>{item.name}</span>
                        </div>
                        </TableCell>

                        <TableCell align='right'>
                        <div style={{display:'flex', flexDirection:'column'}}>
                           <span style={{ fontSize:22}}>{symbol}{item.current_price}</span>
                        
                        </div>
                        </TableCell>

                        <TableCell align='right'>
                        <div style={{display:'flex', flexDirection:'column'}}>
                           <span style={{ fontSize:22, color: profit ? 'green':'red'}}>{item.price_change_percentage_24h.toFixed(3) }</span>
                        
                        </div>
                        </TableCell>

                        <TableCell align='right'>
                        <div style={{display:'flex', flexDirection:'column'}}>
                           <span style={{ fontSize:22}}>{item.market_cap}</span>
                        
                        </div>
                        </TableCell>
                    </TableRow>)
                 } )}
            </TableBody>
        </Table>
        </TableContainer>

        <Pagination 
        style={{display:'flex',alignItems:'center',justifyContent:'center',padding:40}}
        count={handleSearch().length/10}
        onChange={(_,value)=>{
            setPage(value)
           
        }}
        />
    </Container>
  )
}

export default CoinTable