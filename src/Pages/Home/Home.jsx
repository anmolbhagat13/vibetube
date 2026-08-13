import React from 'react'
import './Home.css'
import Sidebar  from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container content ${sidebar?"":'large-container content'}`}>
      <Feed/>
    </div>
  </>
  )
}

export default Home
