import { useState } from 'react'
import { withProviders } from "./providers";
import './index.scss';
import { Routing } from '../pages';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from "../shared/store";
import { withTheme } from './providers/theme';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routing />
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default withTheme(App)
