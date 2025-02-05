
import { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1)
  }

  useEffect(
    function () {
      getAdvice();
    },
    []
  )

  return (
    <div className="App">
      <h1>Hello Jonas</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get advice</button>
      <Message count = {count}/>
    </div>
  )
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  )
}

