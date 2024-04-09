import React from 'react'
import RoverCanvas from '../about/Rover'
import "../../styles/project/projectscard.css"
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Modal from './modalpopup';
import Cyclorotormodel from '../../assets/images/project/cyclorotor';
import Ionicthruster from '../../assets/images/project/ionicthruster';
import LeveragingLight from '../../assets/images/project/LeveragingLight';
import TELESCOPE from '../../assets/images/project/Telescope';
import Soniclevitation from '../../assets/images/project/Soniclevitation';
import Quantumwalker from '../../assets/images/project/Quantumwalker';
import IonicWind from '../../assets/images/project/ionicwind';

const Projectscard = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const [activeModal, setActiveModal] = useState(null);


  const handleOpenModal = (index) => {
    setActiveModal(index);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  const [isYear, setYear] = useState("2024");

  const handle2024 = () => {
    setYear("2024");
    document.getElementsByClassName("year-selector24")[0].style.boxShadow = "2px 3px #fff";
    document.getElementsByClassName("year-selector23")[0].style.boxShadow = "0px 0px";
  }

  const handle2023 = () => {
    setYear("2023");
    document.getElementsByClassName("year-selector23")[0].style.boxShadow = "2px 3px #fff";
    document.getElementsByClassName("year-selector24")[0].style.boxShadow = "0px 0px";
  }

  const handleScroll = (event) => {
    const galleryContainer = event.target;
    const scrollAmount = event.deltaY;
    galleryContainer.scrollTo({
      top: 0,
      left: galleryContainer.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div >

      <div className="year-selector">
        <button className='year-selector24' onClick={handle2024}>2024</button>
        <button className='year-selector23' onClick={handle2023}>2023</button>
      </div>

      {isYear == "2023" ? <>
        <motion.div ref={carousel} className='projectcard' whileTap={{ cursor: 'scrolling' }}>
          <motion.div drag='x' dragConstraints={isMobile ? { right: 0, left: -2800 } : { right: 0, left: -1900 }} className='innerprojectcard'>
            {data2023.map((d, index) => {
              return (
                <motion.div className='projectdetail' key={index}>
                  <div className='projectimage' >{d.image}</div>
                  <h2 className='projectname'>{d.name}</h2>
                  <p className='projectdescription'>{d.description}</p>
                  <button className='projectbutton' onClick={() => handleOpenModal(index)}>Read more</button>
                  {/* <Modal isOpen={activeModal === index} onClose={handleCloseModal}>
                                        <h2>{d.name}</h2>
                                        <p>{d.description}</p>
                                    </Modal> */}

                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
        {activeModal !== null && (
          <Modal isOpen={true} onClose={handleCloseModal}>
            <h1 className='h2modal'>{isYear === "2023" ? data2023[activeModal].name : data2024[activeModal].name}</h1>
            <p className='pmodal'>{isYear === "2023" ? data2023[activeModal].descriptions : data2024[activeModal].descriptions}</p>
          </Modal>
        )}
      </>
        :
        <>
          <motion.div ref={carousel} className='projectcard' whileTap={{ cursor: 'grabbing' }}>
            <motion.div drag='x' dragConstraints={isMobile ? { right: 0, left: -2800 } : { right: 0, left: -1850 }} className='innerprojectcard'>
              {data2024.map((d, index) => {
                return (
                  <motion.div className='projectdetail' key={index}>
                    <div className='projectimage' >{d.image}</div>
                    <h2 className='projectname'>{d.name}</h2>
                    <p className='projectdescription'>{d.description}</p>
                    <button className='projectbutton' onClick={() => handleOpenModal(index)}>Read more</button>
                    {/* <Modal isOpen={activeModal === index} onClose={handleCloseModal}>
                                            <h2>{d.name}</h2>
                                            <p>{d.description}</p>
                                        </Modal> */}
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
          {activeModal !== null && (
            <Modal isOpen={true} onClose={handleCloseModal}>
              <h1 className='h2modal'>{isYear === "2023" ? data2023[activeModal].name : data2024[activeModal].name}</h1>
              <p className='pmodal'>{isYear === "2023" ? data2023[activeModal].descriptions : data2024[activeModal].descriptions}</p>
            </Modal>
          )}

        </>
      }
    </div>
  )
}


const data2023 = [
  {
    name: `Ionic Thruster`,
    image: <Ionicthruster />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Ramjet Engine`,
    image: <Soniclevitation />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Cyclorotor`,
    image: <Cyclorotormodel />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Levaraging Light`,
    image: <LeveragingLight />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Quantum Odessey`,
    image: <Soniclevitation />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Quantum Walker`,
    image: <Quantumwalker />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Telescope`,
    image: <TELESCOPE />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },

]



const data2024 = [
  {
    name: `Ionic Wind`,
    image: <IonicWind />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `QRNG`,
    image: `Ion-Thruster-Full-Diagram.jpg`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Sonic Levitation`,
    image: <Soniclevitation />,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  // {
  //     name: `SMA`,
  //     image: `/Ion-Thruster-Full-Diagram.jpg`,
  //     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
  //     descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  // },
  {
    name: `Plant Disease Detector`,
    image: `/Ion-Thruster-Full-Diagram.jpg`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  // {
  //     name: `Braile Sensor`,
  //     image: `/Ion-Thruster-Full-Diagram.jpg`,
  //     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
  //     descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  // },
  {
    name: `Radio Telescope`,
    image: `/Ion-Thruster-Full-Diagram.jpg`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Radiation Sensor`,
    image: `/Ion-Thruster-Full-Diagram.jpg`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },
  {
    name: `Quantum Game`,
    image: `/Ion-Thruster-Full-Diagram.jpg`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione ab ea accusamus architecto ducimus quo doloremque aliquid reprehenderit quasi sunt iste rem itaque repellendus, qui amet quae, dignissimos aliquam?`,
    descriptions: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla animi quibusdam ducimus consequuntur mollitia totam officiis atque. Totam cum eveniet minima quo. Tempore ratione, quam impedit doloribus reprehenderit enim!`
  },

]


export default Projectscard
