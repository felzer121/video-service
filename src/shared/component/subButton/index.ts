import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

export const SubButton = styled(Button)({
  '&': {
    color: '#FFBE2E',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter',
    fontWeight: '600',
    height: '48px',
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
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