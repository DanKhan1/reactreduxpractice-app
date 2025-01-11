import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementasync, incrementByAmount } from "./Store/reducers/counterSlice";


function App() {
  
const {value} = useSelector((state) => state.counter)
console.log(value);
const dispatch = useDispatch();
  return (
    <>
    <div className="m-auto mt-5 bg-red-300 container p-10">
    <h1 className='mb-5 font-bold text-2xl text-center'>Redux toolkit</h1>
    <h1 className='mb-5 font-bold text-2xl text-center'> counter: {value}</h1>
    <div className="flex justify-center items-center">
    <button onClick={()=>dispatch(increment())} className="border-2 border-red-900 p-3 text-red-900">Increment</button>
    <button onClick={()=>dispatch(decrement())} className="mx-5 border-2 border-red-900 p-3 text-red-900">Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount(5))} className="mx-5 border-2 border-red-900 p-3 text-red-900">Increment by 5</button>
    <button onClick={()=>dispatch(incrementasync(5))} className="border-2 border-red-900 p-3 text-red-900">Increment by 5 asyncthrough</button>
    </div>
    </div>
    </>
  )
}

export default App
