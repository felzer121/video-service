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
