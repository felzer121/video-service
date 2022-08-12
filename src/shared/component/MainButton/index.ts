import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

export const MainButton = styled(Button)({
  '&': {
    color: '#000',
    fontWeight: '600',
    textDecoration: 'none',
    fontFamily: 'Inter',
    height: '48px',
    backgroundColor: '#FFBE2E'
  },
  '&:after': {
    borderBottom: '2px solid #FFBE2E'
  }
})