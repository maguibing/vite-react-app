import Styles from './index.module.scss'

import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className={Styles.root}>
        <div className='nav'>nav</div>
        <div className='main'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
