import { useContext } from "react"
import context from "../utils/context"


const Child = () => {
  const cur = useContext(context)
  return (
    <div className='child'>{cur}</div>
  )
}

export default Child
