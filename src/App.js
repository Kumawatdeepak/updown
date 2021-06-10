import React from 'react';
import "./App.css"
import {useSelector,useDispatch} from 'react-redux'; 
import {incNumber,decNumber} from './actions/index'; 

const App = () => {
   const mystate = useSelector(state => state.changeTheNumber);
    console.log('state= ', mystate)
   const dispatch = useDispatch();
  return <>
    <div className="container">
      <h1>Welcome To Redux </h1>
      <h4>Using react and Redux </h4>
      <button className="buttons" onClick={()=>dispatch(decNumber())}>-</button><input type="text" className="inputs" value={mystate}></input><button className="buttons" onClick={()=>dispatch(incNumber())}>+</button>
    </div>
  </>
}
 
export default App
