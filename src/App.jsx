import { useCounter } from "./custom"
import './App.css'

function App() {
  let [state, decrement, increment] = useCounter(0);

  let [count, dCount, iCount] = useCounter(0);

  return (
    <div className="">
      <button onClick={increment}> increment</button>
      <h2>{state}</h2>
      <button onClick={decrement}> decrement</button>
      <br />

      <br />
      <br />

      <button onClick={iCount}> increment</button>
      <h2>{count}</h2>
      <button onClick={dCount}> decrement</button>


    </div >
  )
}

export default App
