import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource/roboto/400.css';
import {Typography} from '@mui/material';
import SearchForm from './SearchForm';
import WordList from './WordList';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="h3">Your Learner's Dictionary</Typography>
      <WordList/>

    </>
  )
}

export default App
