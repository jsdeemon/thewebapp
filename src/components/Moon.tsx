import React, {FC} from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Brightness3Icon from '@mui/icons-material/Brightness3'; 

const Moon:FC = () => {
  return (
    <div className='moon'>
  {/* <AutoAwesomeIcon sx={{ 'color': 'yellow', 'fontSize': '20px' }} />
      <Brightness3Icon sx={{ 'color': 'yellow', 'fontSize': '50px' }} /> */}
      <i className="fa-solid fa-star-and-crescent"></i>
     
    </div>
  )
}

export default Moon