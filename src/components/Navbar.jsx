import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import{ logo} from '../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const Navbar = () => {
  const [darkMode,setDarkMode]=useState(false)

  const changeMode=()=>{
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-mode")
  }
  return (
    <Stack direction="row" flexDirection="row"  alignItems="center" className={darkMode? "dark-nav": "light-nav"}  p={2} sx={{
        position:'sticky',
        top:0,
        height:100,
        justifyContent:"space-between"
    }}>
         <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
     <SearchBar/>
     <Box onClick={changeMode}>
      {darkMode? <WbSunnyIcon sx={{color:"#fff"}}/> : <ModeNightIcon sx={{color:"#fff"}}/>}
     </Box>
    </Stack>
  )
}

export default Navbar
