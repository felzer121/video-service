import { FilledInput } from "@mui/material"
import { styled } from '@mui/material/styles'

export const DarkFilled = styled(FilledInput)({
  '&': {
    color: '#F3F3F3',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  '&:after': {
    borderBottom: '2px solid #FFBE2E'
  },
  '&:before': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)'
  },
  '&.MuiInputLabel-root': {
    color: '#6D6D6D'
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  '& input:-webkit-autofill' : {
    backgroundColor: '#45413D !important',
    boxShadow: '0 0 0 1000px #45413D inset',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    color: '#fff !important'
  },
  'input:-internal-autofill-selected' : {
    backgroundColor: '#45413D !important',

  }
})