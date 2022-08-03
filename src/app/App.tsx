import { useState } from 'react'
import { withProviders } from "./providers";
import logo from './logo.svg'
import './index.scss';
import { Routing } from '../pages';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux'
import { store } from "../shared/store";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFBE2E',
    },
    secondary: {
      main: '#11cb5f',
    },
    action: {
      disabledBackground: '#756C59',
      disabled: '#000'
    }
  },
  typography: {
    h2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '28px',
      fontWeight: 700
    },
    h4: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '18px',
      fontWeight: 700
    },
    h5: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#C4C4C4',
      fontWeight: 400
    },
    h6: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#C4C4C4',
      fontWeight: 400,
      '&:after': {
        content: '" ]"'
      },
      '&:before': {
        content: '"[ "'
      }
    },
  },
});


function App() {

  return (
    <div>
      <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
