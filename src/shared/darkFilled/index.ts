import { FilledInput } from "@mui/material"
import { styled } from '@mui/material/styles'

export const DarkFilled = styled(FilledInput)({
  '&': {
    color: '#828282',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  '&:after': {
    borderBottom: '2px solid #FFBE2E'
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
})