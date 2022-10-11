/* eslint-disable import/no-anonymous-default-export */

//     // //useState is great for simple state value
//     // //If you have complex state value, where the next state value is depends on previous state value, then useReducer is preferable
// import { useReducer } from 'react'

// type CounterState = {
//   count: number
// }

// type UpdateAction = {
//   type: 'increment' | 'decrement'
//   payload: number
// }

// type ResetAction = {
//   type: 'reset'
// }

// type CounterAction = UpdateAction | ResetAction

// const initialState = { count: 0 }

// function reducer(state: CounterState, action: CounterAction) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + action.payload }
//     case 'decrement':
//       return { count: state.count - action.payload }
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// export const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
//         Increment 10
//       </button>
//       <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
//         Decrement 10
//       </button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </>
//   )
// }

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default  () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);