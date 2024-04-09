
// import GalleryCard from "./GalleryCard";
import Navbar from '../Navbar';
import '../../styles/gallery/gallery.css'
import GalleryCard from './GalleryCard';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {

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

    const [width, setWidth] = useState(0);
    const containerRef = useRef();
    useEffect(() => {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }, []);

    return (
        <>

            <div className="tempNav">
                <Navbar />
            </div>

            <div className="year-selector">
                <button className='year-selector24' onClick={handle2024}>2024</button>
                <button className='year-selector23' onClick={handle2023}>2023</button>
            </div>

            <motion.div className="galleryContainer snaps-inline" ref={containerRef} drag="x" dragConstraints={{ right: 0, left: -2000 }}>
                {isYear !== "2023" ? <>
                    <div className="first-row">
                        <GalleryCard identifier={1} />
                        <GalleryCard identifier={2} />
                        <GalleryCard identifier={3} width={"492.5"} />
                        <GalleryCard identifier={4} width={"492.5"} />
                        <GalleryCard identifier={5} />
                        <GalleryCard identifier={6} />
                        <GalleryCard identifier={7} />
                        <GalleryCard identifier={8} />


                    </div>
                    <div className="second-row">
                        <GalleryCard identifier={100} />
                        <GalleryCard identifier={101} width={'630'} />
                        <GalleryCard identifier={102} />
                        <GalleryCard identifier={103} />
                        <GalleryCard identifier={104} />
                        <GalleryCard identifier={105} />
                        <GalleryCard identifier={106} />
                    </div>
                    <div className="third-row">
                        <GalleryCard identifier={201} width={"492.5"} />
                        <GalleryCard identifier={202} />
                        <GalleryCard identifier={203} />
                        <GalleryCard identifier={204} />
                        <GalleryCard identifier={205} />
                        <GalleryCard identifier={206} />
                        <GalleryCard identifier={207} />
                        <GalleryCard identifier={208} />
                    </div>
                </>

                    :

                    <>
                        <div className="first-row">
                            <GalleryCard identifier={51} width={'630'} />
                            <GalleryCard identifier={52} />
                            <GalleryCard identifier={53} />
                            <GalleryCard identifier={54} />
                            <GalleryCard identifier={55} />
                            <GalleryCard identifier={56} />
                            <GalleryCard identifier={57} />
                        </div>
                        <div className="second-row">
                            <GalleryCard identifier={150} />
                            <GalleryCard identifier={151} />
                            <GalleryCard identifier={152} />
                            <GalleryCard identifier={153} />
                        </div>
                        <div className="third-row">
                            <GalleryCard identifier={251} width={"492.5"} />
                            <GalleryCard identifier={252} />
                            <GalleryCard identifier={253} />
                            <GalleryCard identifier={254} />
                        </div>
                    </>}
            </motion.div>

        </>

    );
}

export default Gallery;
