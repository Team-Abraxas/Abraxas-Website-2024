import React, { Component } from 'react'
import '../../styles/timeline/timeline.css'
import background from "../../assets/images/timeline/textBack.png";
import Navbar from '../Navbar';
import t_jan from "../../assets/timeline_jan.json";
import t_feb from "../../assets/timeline_feb.json";
import t_march from "../../assets/timline_march.json";
import t_april from "../../assets/timeline_april.json"

class Timeline extends Component {
    componentDidMount() {
        var cursor = document.querySelector('.cursor');
        var cursor2 = document.querySelector('.cursor2');
        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px;top:"
                + e.clientY + "px;";
        });

    }
    render() {
        return (
            <>
                <div className="tempNav">
                    <Navbar />
                </div>
                <div className="roadmap">
                    <h3 className="h3" style={{ backgroundImage: 'url(' + background + ')' }} >TimeLine</h3>
                    <div className="roadmap-container">
                        <div className="container-1">
                            <div className="headline">January 2024</div>
                            <div className="content">
                                <ul className="timeline-list">
                                    {
                                        t_jan.map((t_value) => {
                                            return (
                                                <li className="timeline-list-text">
                                                    <div className="dots"></div>
                                                    <div className="text"><b>{t_value.date}</b><p className="innerText" dangerouslySetInnerHTML={{ __html: t_value.event }} /></div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot"></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                        <div className="container-2">
                            <div className="headline">February 2024</div>
                            <div className="content">
                                <ul className="timeline-list">
                                    {
                                        t_feb.map((t_value) => {
                                            return (
                                                <>
                                                    <li className="timeline-list-text">
                                                        <div className="dots"></div>
                                                        <div className="text"><b>{t_value.date}</b><p className="innerText" dangerouslySetInnerHTML={{ __html: t_value.event }} /></div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }

                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot"></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                        <div className="container-2">
                            <div className="headline">March 2024</div>
                            <div className="content">
                                <ul className="timeline-list">
                                    {
                                        t_march.map((t_value) => {
                                            return (
                                                <>
                                                    <li className="timeline-list-text">
                                                        <div className="dots"></div>
                                                        <div className="text"><b>{t_value.date}</b><p className="innerText" dangerouslySetInnerHTML={{ __html: t_value.event }} /></div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }

                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot" onFocus={() => { "" }}></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                        <div className="container-2">
                            <div className="headline">April 2024</div>
                            <div className="content">
                                <ul className="timeline-list">

                                    {
                                        t_april.map((t_value) => {
                                            return (
                                                <>
                                                    <li className="timeline-list-text">
                                                        <div className="dots"></div>
                                                        <div className="text"><b>{t_value.date}</b><p className="innerText" dangerouslySetInnerHTML={{ __html: t_value.event }} /></div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot"></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default Timeline;