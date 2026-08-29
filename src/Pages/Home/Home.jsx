import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Home = ({ sidebar }) => {

  const [category, setCategory] = useState(0)

  return (
    <div className='home'>
      {/* <div className='sidebar'> */}
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      {/* </div> */}
      <div className={`container content ${sidebar ? "" : 'large-container content'}`}>
        <Feed category={category} />
      </div>
    </div>
  )
}

export default Home
