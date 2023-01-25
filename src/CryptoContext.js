import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const Crypto= createContext({currency:'USD',symbol:"$"})

const CryptoContext = (props) => {
    const [ currency, setCurrency ] = useState('USD')
    const [symbol, setSymbol] = useState('$')

    useEffect(()=>{
        // {currency==='USD' ? setSymbol('$') : setSymbol('₹')}
        if(currency==='USD') setSymbol('$')
        else if(currency==="INR") setSymbol("₹")

    },[currency])

  return (
    <Crypto.Provider value={{currency, symbol, setCurrency}}>
        {props.children}
    </Crypto.Provider>
  )
}

export default CryptoContext
