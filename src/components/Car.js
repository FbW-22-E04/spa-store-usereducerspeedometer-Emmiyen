import React, { useContext } from "react";
import { CarContext } from "../Context";
import ReactSpeedometer from "react-d3-speedometer"




export default function Car() {
const {state, dispatchState} = useContext(CarContext)
console.log(state)
  return <div className="car">
    {state.turnOn &&( <ReactSpeedometer value={state.speed} minValue={0} maxValue={300} /> )}

  {state.turnOn ? <p>Switch is ON</p>: <p>Switch is OFF</p>}

    <div>
      <button onClick={()=> dispatchState({type:'onButton'})}>Switch On</button>
      <button onClick={()=> dispatchState({type:'accelerate'})}>Accelerate</button>
      <button onClick={()=> dispatchState({type:'break'})}>Break</button>
    </div>
  </div>;
}
