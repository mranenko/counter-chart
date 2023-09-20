import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { decrement, increment, reset } from '../../app/counterSlice'
import { COUNTER } from '../../constants/counter' 
import styles from './CounterInput.module.css'

const CounterInput = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const decrementCount = () => {
    if (count > COUNTER.MIN) {
      updateCount(count-1)
      dispatch(decrement())
    }
  }

  const incrementCount = () => {
    if (count < COUNTER.MAX) {
      updateCount(count+1)
      dispatch(increment())
    }
  }

  const resetCount = () => {
    if (count !== COUNTER.DEFAULT) {
      updateCount(COUNTER.DEFAULT)
      dispatch(reset(COUNTER.DEFAULT))
    }
  };

  const updateCount = (count: number) => {
    const angle = 360 * (count / COUNTER.MAX)
    document.documentElement.style.setProperty('--chart-angle', `${angle}deg`)
  }

  return (
    <div className={styles['counter-input-group']}>
      <label htmlFor='count'>
        The number below is between {COUNTER.MIN} and {COUNTER.MAX}
      </label>

      <span className={styles['counter-input']}>
        <button onClick={decrementCount}>-</button>
        <input id='count' readOnly type='text' value={count} />
        <button onClick={incrementCount}>+</button>
      </span>
      
      <a onClick={resetCount}>Reset</a>
    </div>
  )
}

export { CounterInput, COUNTER }
