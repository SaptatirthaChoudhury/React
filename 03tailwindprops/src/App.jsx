import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import data from './utils/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-7'>Tailwind test</h1>
      {/* <Card  myObj1={data.links} myObj2={data.stats}/>
      <Card  myObj1={data.links} myObj2={data.stats2}/> */}

      <Card myObj={{ links: data.links, stats: data.stats }} />
      <Card myObj={{ links: data.links, stats: data.stats2 }} />
    </>
  )
}

export default App
