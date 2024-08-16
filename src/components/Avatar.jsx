import { useState } from 'react'

import propTypes from 'prop-types'
import Child from './Child'

import context from '../utils/context'

const Avatar = ({ flag = false, children }) => {
  const [message, setMessage] = useState('我是你爹')
  const handleSwitch = () => {
    setMessage('你好啊')
  }


  return (
    <context.Provider value={message}>
      <div className="avatar" style={{ marginTop: 20 }}>
        Avatar {flag ? "Hello world !" : "你好世界"}
        {children}
        <Child />
        <div style={{ width: 100, height: 100, background: 'green' }} onClick={handleSwitch}>{message}</div>
      </div>
    </context.Provider>
  )
}

Avatar.propTypes = {
  flag: propTypes.bool,
  children: propTypes.string
}


export default Avatar
