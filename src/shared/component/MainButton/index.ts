import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

export const MainButton = styled(Button)({
  '&': {
    color: '#000',
    fontWeight: '600',
    padding: '0 25px',
    textDecoration: 'none',
    fontFamily: 'Inter',
    height: '48px',
    backgroundColor: '#FFBE2E'
  },
  '&:hover': {
    backgroundColor: '#BF9902'
  },
  '&:after': {
    borderBottom: '2px solid #FFBE2E'
  }
})