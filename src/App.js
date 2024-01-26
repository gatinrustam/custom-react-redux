import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({type: "INCREMENT_COUNTER"})
  }
  
  const decrementHandler = () => {
    dispatch({type: "DECREMENT_COUNTER"})
  }
  return (
    <div className="App">
      <div className="counter">
        <button className="counter__button" type="button" onClick={decrementHandler}>-</button>
        <span className="counter__value">{counter}</span>
        <button className="counter__button" type="button" onClick={incrementHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
