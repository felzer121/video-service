import { useState } from 'react'
import { withProviders } from "./providers";
import logo from './logo.svg'
import './index.scss';
import { Routing } from '../pages';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFBE2E',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </div>
  )
}

export default withProviders(App)
