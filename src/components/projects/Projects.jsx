import React from 'react'
//import RoverCanvas from '../about/Rover'
import Navbar from '../Navbar'
import '../../styles/project/project.css'
//import Coming from '../coming_soon/Coming'
import Projectscard from './projectscard'
// import modalpopup from './modalpopup'

const Projects = () => {
  return (
  <>
    <div className='tempNav'>
      <Navbar />
    </div>
    <div>
      <Projectscard/>
      {/* <modalpopup/> */}
    </div>
    </>
  )
}

export default Projects
