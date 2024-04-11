import React from 'react';
import Navbar from '../Navbar';
import '../../styles/event/events.css';
import { useState } from 'react';


const Events = () => {
    const [isEvent, setEvent] = useState("workshop");
    const myStyle = { color: "white", marginBottom: "2.5rem" };

    function eventHandle() {
        setEvent("events");
        document.getElementsByClassName("evtBtn")[0].style.boxShadow = "2px 3px #fff";
        document.getElementsByClassName("eventPageTitle")[0].style.boxShadow = "0px 0px";
    }

    function workshopHandle() {
        setEvent("workshop");
        document.getElementsByClassName("eventPageTitle")[0].style.boxShadow = "2px 3px #fff";
        document.getElementsByClassName("evtBtn")[0].style.boxShadow = "0px 0px";
    }

    return (
        <div>
            <div className="tempNav">
                <Navbar />
            </div>
            <div className="workShop">
                <button className='eventPageTitle' onClick={workshopHandle}>Work Shop</button>
                <button className='evtBtn' onClick={eventHandle}>Events</button>
            </div>

            <div className='eventsCard'>
                {isEvent !== "workshop" ? <>

                    <div className="wrap animate pop">
                        <div className="overlay">
                            {/* <div className="overlay-content animate slide-left delay-2">
                                <h1 className="animate slide-left pop delay-4">Physics Carnival</h1>
                                <p className="animate slide-left pop delay-5" style={myStyle}></p>
                            </div> */}
                            <div className="image-content1 animate slide delay-5"></div>
                            {/* <div className="dotsEvent animate">
								<div className="dotEvent animate slide-up delay-6"></div>
								<div className="dotEvent animate slide-up delay-7"></div>
								<div className="dotEvent animate slide-up delay-8"></div>
							</div> */}
                        </div>
                        <div className="eventText">
                            <p>Team Abraxas proudly hosted the Physics Carnival, a vibrant event where we brought physics to life through interactive projects and games. Attendees immersed themselves in the wonders of science, exploring concepts like quantum tunneling analogues and infinite mirrors in engaging and entertaining ways. From hands-on demonstrations to thought-provoking activities, the Physics Carnival sparked curiosity and excitement about the world of physics. Enthusiasts enjoyed the opportunity to discover, learn, and have fun while delving into the fascinating realm of science. It was just one of the exhilarating events that blend education with entertainment from Team Abraxas!


                            </p>
                        </div>
                    </div>
                    <div className="wrap animate pop">
                        <div className="overlay">
                            {/* <div className="overlay-content animate slide-left delay-2">
                                <h1 className="animate slide-left pop delay-4">Escape Room</h1>
                            </div> */}
                            <div className="image-content2 animate slide delay-5"></div>
                            {/* <div className="dotsEvent animate">
								<div className="dotEvent animate slide-up delay-6"></div>
								<div className="dotEvent animate slide-up delay-7"></div>
								<div className="dotEvent animate slide-up delay-8"></div>
							</div> */}
                        </div>
                        <div className="eventText">
                            <p>On April 11th, we're thrilled to present our exhilarating event, the Escape Room. Participants will embark on an adventure filled with physics-based puzzles and clues, testing their wit and creativity to escape within the allotted time. As they navigate through the challenges, they'll encounter mind-bending concepts and engage in thrilling problem-solving. The ultimate victor will claim fantastic prizes, rewarding their mastery of physics and puzzle-solving skills. Join us for an unforgettable experience that combines fun, learning, and friendly competition. Get ready to unlock the mysteries and emerge victorious in our Escape Room!


                            </p>
                        </div>
                    </div>
                </>

                    :
                    <><div className="wrap animate pop">
                        <div className="overlay">
                            <div className="overlay-content animate slide-left delay-2">
                                {/* <h1 className="animate slide-left pop delay-4">Print Hub</h1> */}

                            </div>
                            <div className="image-content3 animate slide delay-5"></div>
                            {/* <div className="dotsEvent animate">
								<div className="dotEvent animate slide-up delay-6"></div>
								<div className="dotEvent animate slide-up delay-7"></div>
								<div className="dotEvent animate slide-up delay-8"></div>
							</div> */}
                        </div>
                        <div className="eventText">
                            <p>
                                The team abraxas conducted a workshop on its handcrafted 3d printer on 13th of February.This  workshop delved into the intricacies of its machinery and software, enlightening participants on its operational mechanics. Attendees gained insights into the diverse applications and functionalities of 3D printing technology. From understanding the nuances of various printing materials to mastering the utilization of specialized software for coding designs, the workshop provided a comprehensive overview. Participants explored the transformative potential of 3D printing across industries, fostering innovative thinking and practical skills. Through hands-on demonstrations and engaging discussions, the workshop empowered individuals to harness the power of this cutting-edge technology for creative expression and problem-solving.
                            </p>
                        </div>
                    </div>
                        <div className="wrap animate pop">
                            <div className="overlay">
                                <div className="overlay-content animate slide-left delay-2">
                                    {/* <h1 className="animate slide-left pop delay-4">Guest Lecture by Influencer and educator Rajan Chopra</h1> */}

                                </div>
                                <div className="image-content4 animate slide delay-5"></div>
                                {/* <div className="dotsEvent animate">
									<div className="dotEvent animate slide-up delay-6"></div>
									<div className="dotEvent animate slide-up delay-7"></div>
									<div className="dotEvent animate slide-up delay-8"></div>
								</div> */}
                            </div>
                            <div className="eventText">
                                <p> Team Abraxas had the privilege of hosting a captivating guest lecture by renowned Instagram influencer Mr. Rajan Chopra on April 5th. With over 400k followers, Mr. Chopra shared profound insights on the intersection of quantum physics and everyday life, enriching our understanding of both realms. His engaging discourse not only delved into complex physics concepts but also offered invaluable life wisdom. Attendees were inspired by his unique perspective, leaving with a deeper appreciation for the mysteries of the universe and practical insights for personal growth. This event marks the start of more exciting discussions and learning opportunities with Team Abraxas.


                                </p>
                            </div>
                        </div>
                    </>}
            </div>


        </div>
    )
}

export default Events;