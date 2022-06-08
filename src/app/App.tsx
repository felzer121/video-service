import { useState } from 'react'
import { withProviders } from "./providers";
import logo from './logo.svg'
import './index.scss';
import { Routing } from '../pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routing />
    </div>
  )
}

export default withProviders(App)
