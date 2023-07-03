import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box, Typography,useTheme } from '@mui/material'
import Flexbetween from '@/components/FlexBetween';
import AcUnitIcon from '@mui/icons-material/AcUnit';
type Props = {}
const enum Navenums{
    dashboard='dashboard',
    predictions='predictions'
}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected,setSelected]=useState<string | null>(Navenums.dashboard);
  return (
    <Flexbetween mb='0.25rem' p='0.5rem  0rem' color={palette.grey[300]} >
        <Flexbetween gap={'1rem'}>
            <AcUnitIcon sx={{fontSize:'26px'}} />
            <Typography variant='h4' fontSize={'14px'}>Finance</Typography>
        </Flexbetween>
        <Flexbetween gap={'1rem'}>
            <Box sx={{'&:hover': palette.primary[100]}}>
                <Link to='/' onClick={()=> setSelected(Navenums.dashboard)} 
                style={{color: selected === Navenums.dashboard ? 'inherit' : palette.grey[700], textDecoration:'' }}>Dasboard</Link>
            </Box>
            <Box sx={{'&:hover': palette.primary[100]}}>
                <Link to='/predictions' onClick={()=> setSelected(Navenums.predictions)} 
                style={{color: selected === Navenums.predictions ? 'inherit' : palette.grey[700], textDecoration:'' }}>Predictions</Link>
            </Box>
        </Flexbetween>
    </Flexbetween>
    )
}

export default Navbar