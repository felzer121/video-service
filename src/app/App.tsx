import { Routing } from '../pages/Router';
import { BrowserRouter } from "react-router-dom";
import { compose } from 'redux';
import { withTheme } from './providers/theme';
import { withStore } from './providers/store'
import './index.scss';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default compose(
  withTheme,
  withStore,
)(App);
