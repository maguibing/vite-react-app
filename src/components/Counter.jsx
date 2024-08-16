import { useDispatch, useSelector } from "react-redux"
import { increment } from "../store/reducers/count"

const Counter = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.counterReducer)

  return (
    <>
      <div className="counter" onClick={() => dispatch(increment(200))}>
        {state.value} 这是counter组件
      </div>
    </>
  )
}

export default Counter
