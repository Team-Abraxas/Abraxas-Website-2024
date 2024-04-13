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
import Ramjet from '../../assets/images/project/Ramjet';
import RadioTelescope from '../../assets/images/project/Radiotelescope';

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
        <button className='year-selector24' style={{ boxShadow: `${isYear === '2024' ? '2px 3px #fff' : 'transparent'}` }} onClick={handle2024}>2024</button>
        <button className='year-selector23' onClick={handle2023}>2023</button>
      </div>

      {isYear == "2023" ? <>
        <motion.div ref={carousel} className='projectcard' whileTap={{ cursor: 'grabbing' }}>
          <motion.div drag='x' dragConstraints={isMobile ? { right: 0, left: -2800 } : { right: 0, left: -width }} className='innerprojectcard'>
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
    description: `Ionic thrusters propel spacecraft by accelerating ions using electromagnetic fields.They promise efficient, high-performance propulsion, revolutionizing space exploration with enhanced efficiency and extended capabilities.`,
    descriptions: `Ionic thrusters represent a pioneering propulsion technology revolutionizing space exploration. These thrusters utilize electromagnetic fields to accelerate ions, providing spacecraft with propulsion. By expelling ions at high velocities, they generate thrust, enabling efficient and high-performance propulsion systems. Compared to traditional chemical rockets, ionic thrusters offer significant advantages in terms of fuel efficiency and mission duration. Their precise control and long operational lifetimes make them ideal for extended missions to distant destinations within the solar system and beyond. Additionally, ionic thrusters contribute to reducing the overall mass of spacecraft, allowing for larger payloads or smaller, more cost-effective missions. As the demand for exploration beyond Earth's orbit continues to grow, ionic thrusters are poised to play a crucial role in enabling ambitious missions to explore new frontiers and expand humanity's understanding of the universe.`
  },
  {
    name: `Ramjet Engine`,
    image: <Ramjet />,
    description: `Ramjet engines are air-breathing jet engines for high-speed flight, distinct from traditional ones by lacking compressors. They exploit the aircraft's forward motion to compress incoming air for combustion.`,
    descriptions: `The fundamental operation of a ramjet engine hinges upon the principle of air compression facilitated by the vehicle's forward motion. When an aircraft or missile accelerates at high velocities, the ram effect compels air into the engine's inlet. Unlike conventional engines, ramjets forego mechanical compressors, relying solely on the kinetic energy from the vehicle's movement to compress incoming air. This compressed air undergoes mixing with fuel within the engine, subsequently igniting in a combustion chamber. The combustion process yields high-temperature, high-pressure gases, which rapidly expand and exit through the engine's exhaust nozzle, generating forward thrust. Ramjets demonstrate optimal efficiency in supersonic flight regimes, where they proficiently compress air. However, their effectiveness diminishes at lower velocities, necessitating alternative propulsion mechanisms for takeoff and initial acceleration phases.
    `
  },
  {
    name: `Cyclorotor`,
    image: <Cyclorotormodel />,
    description: `A cyclorotor, found in VTOL aircraft, features cycloidal rotors rotating around the fuselage. This design creates swirling airflow akin to cyclones, offering efficient lift and propulsion for improved maneuverability in various applications.`,
    descriptions: `Cyclorotors represent a distinctive approach to rotor systems in aerospace, featuring cycloidal blades arranged circularly around the aircraft's fuselage. These blades exhibit dual rotation, spinning both around their axis and the central rotor assembly, creating a swirling airflow reminiscent of a cyclone. This unique airflow pattern generates both lift and propulsion. Pilots can finely adjust the pitch and rotational speeds of individual blades, granting precise control over thrust magnitude and direction, facilitating agile maneuverability and stable hovering. Cyclorotors excel in vertical takeoff and landing (VTOL) scenarios, offering efficient lift alongside reduced noise and vibration. Their versatility extends across diverse applications, including unmanned aerial vehicles (UAVs) and urban air mobility vehicles, promising improved performance and control in aerospace operations. The innovative design and operational flexibility of cyclorotors make them a compelling choice for modern aviation challenges.`
  },
  {
    name: `Levaraging Light`,
    image: <LeveragingLight />,
    description: `Our method, merging Michelson interferometer patterns with Newtonian physics, detects tiny masses. Mirror adjustments via a lever reveal mass-induced interference changes, opening fresh insights across physics domains.`,
    descriptions: `This inventive method repurposes the Michelson interferometer, typically used for measuring small distances, to gauge minute masses. Light divided by a beam splitter generates interference rings upon recombination. Adjusting mirror distances via a lever alters the number of rings, directly affected by particle mass. Lever movement modifies the interferometer's configuration, impacting the interference pattern observed on a screen. By observing these changes and applying the center of gravity concept, the particle's mass can be deduced. This integration of quantum physics and classical mechanics presents a unique perspective, blending principles to unlock novel scientific insights. Such interdisciplinary approaches push the boundaries of conventional methodologies, offering new avenues for exploration at the interface of physics disciplines.`
  },
  {
    name: `Quantum Breakout`,
    image: <img src="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836790/Batch2024/Screenshot_from_2024-04-11_17-29-30_w1cths.png" style={{ width: '300px', borderRadius: '10px' }} />,
    description: `Designed a quantum Breakout game to teach school students Qubit Manipulation using Quantum Gates. It offers an interactive platform for learning complex concepts in a fun and engaging way.`,
    descriptions: `We've developed a quantum version of the classic Breakout game tailored for school students to grasp qubit manipulation through various quantum gates. This educational tool merges entertainment with learning, allowing students to interactively explore the intricate world of quantum mechanics. By maneuvering through the game's challenges, players gain practical insights into how quantum gates influence qubit states, paving the way for a deeper understanding of quantum computing principles. The game's intuitive interface and engaging gameplay make it an effective supplement to traditional classroom teachings, offering students a dynamic way to visualize abstract concepts. As they progress through levels, players encounter different quantum gates, each presenting unique challenges and learning opportunities. This innovative approach to education harnesses the power of gamification to make quantum concepts accessible and enjoyable, empowering students to become proficient in quantum computing fundamentals.`
  },
  {
    name: `Quantum Walker`,
    image: <Quantumwalker />,
    description: `Quantum walker simulations utilize silica gel to mimic quantum behavior. Silica's porous structure mimics quantum states, enabling studies in particle dynamics, paving the way for quantum computing advancements.`,
    descriptions: `Quantum walker simulations leverage silica gel's porous structure to mimic quantum behavior. By embedding quantum particles within the gel, researchers observe their movement through its intricate pathways, akin to quantum states. This setup enables the study of particle dynamics and quantum phenomena in controlled environments. Through precise manipulation of experimental parameters, such as particle interactions and environmental conditions, insights into quantum mechanics and potential applications in quantum computing emerge. Silica gel's versatility allows for the emulation of various quantum systems, offering a platform for investigating complex quantum phenomena and testing theoretical models. Quantum walker simulations using silica gel represent a crucial step towards understanding fundamental quantum principles and developing practical quantum technologies. This innovative approach holds promise for advancing quantum information science and unlocking the full potential of quantum computing in solving real-world problems.`
  },
  {
    name: `Telescope`,
    image: <TELESCOPE />,
    description: `Crafted with precision, our Newtonian telescope offers an immersive stargazing experience. With homemade optics and meticulous assembly, it unveils celestial wonders, bringing the cosmos closer to amateur astronomers.`,
    descriptions: `Our Newtonian telescope is a testament to craftsmanship and passion for astronomy. Built with care and attention to detail, it features handcrafted optics and a meticulously aligned mirror system. The telescope's design, inspired by Sir Isaac Newton's original concept, ensures crisp and clear views of celestial objects. From distant galaxies to the craters of the moon, this telescope reveals the wonders of the night sky with unparalleled clarity. Each component, carefully assembled and calibrated, contributes to the telescope's performance, delivering stunning images of stars, planets, and nebulae. Whether observing the rings of Saturn or the phases of Venus, amateur astronomers can embark on captivating journeys through the cosmos from the comfort of their backyard. With its homemade charm and astronomical capabilities, our Newtonian telescope opens new horizons for stargazers and enthusiasts alike, fostering a deeper appreciation for the universe and the wonders it holds.`
  },

]



const data2024 = [
  {
    name: `Ionic Wind`,
    image: <IonicWind />,
    description: `Revolutionizing space travel with advanced ionic thrusters, utilizing electromagnetic fields to propel ions for spacecraft. Our focus: enhancing efficiency, enabling missions to explore new cosmic frontiers.`,
    descriptions: `At the forefront of space exploration propulsion technology, our project aims to revolutionize interstellar travel. By developing cutting-edge ionic thrusters, we harness the power of electromagnetic fields to accelerate ions, providing efficient propulsion for spacecraft. Through meticulous design, rigorous testing, and innovative engineering, we strive to optimize fuel efficiency and enhance the capabilities of space missions. Our research delves into the intricacies of ion manipulation and electromagnetic propulsion, paving the way for spacecraft to reach unprecedented speeds and distances. With a focus on sustainability and performance, our Ionic Thruster Project promises to redefine the boundaries of space exploration, enabling humanity to venture further into the cosmos than ever before.`
  },
  {
    name: `QRNG`,
    image: <img src="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712835814/Batch2024/images_djnjn3.jpg" style={{ borderRadius: '10px', height: '220px' }} />,
    description: `Quantum Binary Number Generator: Revolutionizing security with quantum mechanics. Join us in bridging theory with implementation, unlocking new frontiers in computational unpredictability and cryptographic security.`,
    descriptions: `This project pioneers quantum mechanics principles in the development of a Binary Number Generator to redefine random number generation. Exploiting quantum superposition, it aims to surpass classical pseudorandom number generators, ensuring genuinely random outputs. Using quantum bits (qubits) and their simultaneous state existence, it introduces unparalleled unpredictability. The focus is on creating a robust system for cryptography, secure communications, and Quantum Key Distribution (QKD) systems, ensuring unbreakable cryptographic security. Managing quantum noise is crucial for reliability and quality. The goal is to build a prototype integrating quantum mechanics theory with practical implementation. Beyond cryptography, it promises to advance quantum computing and understanding of quantum principles. This initiative represents a significant leap towards realizing quantum-powered randomness, unlocking new frontiers in secure communication and computational unpredictability.`
  },
  {
    name: `Sonic Levitation`,
    image: <Soniclevitation />,
    description: `Sound waves suspend objects mid-air, defying gravity without contact. High-frequency waves generate pressure, counteracting gravity. Precise wave control allows manipulation and levitation.`,
    descriptions: `Sonic levitation harnesses high-frequency sound waves to suspend objects without direct physical contact. By generating regions of high pressure through sound wave interference, gravity's force can be effectively countered, allowing objects to float in mid-air. Precise control over the frequency, intensity, and phase of the sound waves enables manipulation and levitation of objects with accuracy. This technology holds promise for a variety of applications across multiple industries, including manufacturing, scientific experimentation, and artistic installations. In manufacturing, sonic levitation could facilitate delicate assembly tasks or enable contactless handling of sensitive materials. In scientific research, it could aid in the study of fluid dynamics or microgravity environments. Additionally, in the realm of art and entertainment, sonic levitation offers creative possibilities for immersive experiences and visual displays. Overall, sonic levitation represents a groundbreaking approach to object manipulation, opening up new avenues for innovation and discovery.`
  },

  {
    name: `Plant Disease Detector`,
    image: <img src="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836309/Batch2024/images_eilvlr.jpg" style={{ borderRadius: '10px', height: '220px' }} />,
    description: `Revolutionizing farming, our tool utilizes machine learning and Python to swiftly identify plant diseases, ensuring healthier yields and sustainable agriculture. Experience the future of crop management with our innovative solution.`,
    descriptions: `Our plant disease detector harnesses the power of machine learning, Python, and image recognition to swiftly identify diseases in plant leaves. This innovative tool aids farmers in early intervention and crop protection, promoting sustainable farming practices by reducing pesticide usage and improving yield quality. Empowering farmers with real-time, accurate diagnoses, it revolutionizes crop management, fostering healthier harvests and economic stability. Seamlessly integrating into existing workflows, our solution represents a pivotal advancement in agricultural technology, bridging the gap between traditional farming and the digital era. Join us in shaping the future of agriculture with cutting-edge innovation and sustainable practices.`
  },

  {
    name: `Radio Telescope`,
    image: <RadioTelescope />,
    description: `An advanced cosmic listener captures distant celestial radio waves, revealing mysteries beyond visible light. Operating ceaselessly, it unlocks cosmic secrets, undeterred by atmospheric barriers, expanding our cosmic comprehension.`,
    descriptions: `Radiotelescopes function by capturing and studying radio waves emitted by celestial entities. Typically comprising a large dish or an array of antennas, they receive incoming radio signals, which are then focused onto a receiver for conversion into electrical signals. This receiver amplifies and processes the signals, extracting vital data regarding the radio waves' intensity, frequency, and polarization.

    Sophisticated computer systems analyze this data, filtering out unwanted noise and interference to generate images or spectra of observed objects. By examining the sky across various frequencies and wavelengths, radiotelescopes reveal a multitude of astrophysical phenomena, such as pulsars, quasars, galaxies, and the cosmic microwave background radiation. Their unique capability to penetrate cosmic dust and gas allows them to explore regions of the universe inaccessible to optical telescopes, offering invaluable insights into the cosmos' nature and evolution.`
  },
  {
    name: `Radiation Sensor`,
    image: <img src="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836492/Batch2024/images_rpmmmv.jpg" style={{ width: '300px', borderRadius: '10px' }} />,
    description: `Deploying Geiger-Müller tubes and advanced signal processing for ongoing monitoring. Dependable, wireless, and alert-ready, it ensures unmatched radiation detection across diverse environments.`,
    descriptions: `The IoT-based Radiation Monitoring System employs fixed detectors with Geiger-Müller tubes to monitor gamma and neutron radiation levels continuously. These detectors convert radiation signals into analog pulses, amplified and processed into square waves for analysis. Managed by microcontrollers like Arduino, data is transmitted to a central gateway facilitating communication with servers. Supplementary sensors provide contextual data, enhancing analysis. Servers consolidate and analyze data, enabling real-time monitoring and response to radiation incidents. This comprehensive approach ensures continuous and reliable radiation surveillance, vital for safety in diverse environments.`
  },
  {
    name: `Quantum hunt`,
    image: <img src="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836619/Batch2024/images_jgwgbg.png" style={{ width: '300px', borderRadius: '10px' }} />,
    description: `Experience the efficiency of quantum computing through a treasure hunt game featuring Grover's algorithm. This interactive tool not only entertains but also educates, offering insights into quantum algorithms. `,
    descriptions: `In our treasure hunt game, players delve into the realm of quantum computing, wielding Grover's algorithm to efficiently search for hidden treasures. Through engaging gameplay, participants witness firsthand the remarkable capabilities of quantum algorithms in solving complex search problems exponentially faster than classical counterparts. As players navigate through the game, they encounter scenarios where quantum principles guide them to success, fostering a deeper understanding of quantum computation. Beyond entertainment, the game serves as an educational tool, bridging the gap between theory and practice by offering tangible experiences with quantum algorithms. By gamifying quantum concepts, we aim to make learning engaging and accessible, inspiring the next generation of innovators to explore the frontiers of quantum computing. Get ready to embark on an adventure where quantum exploration unlocks treasures of knowledge and discovery.`
  },

]


export default Projectscard
