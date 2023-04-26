import { useState } from 'react'
import { withProviders } from "./providers";
import './index.scss';
import { Routing } from '../pages/Router';
import { BrowserRouter } from "react-router-dom";

import { withTheme } from './providers/theme';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default withTheme(App)
