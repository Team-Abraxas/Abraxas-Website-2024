// import GalleryCard from "./GalleryCard";
import Navbar from '../Navbar';
import '../../styles/gallery/gallery.css'
import GalleryCard from './GalleryCard';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ImageModel from './imageModel';
// import jsonData from '../../assets/imageData.json'

const Gallery = () => {

    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [currentIdentifier, setCurrentIdentifier] = useState(null)
    const [isYear, setYear] = useState("2024");
    const myStyle = { color: "white", marginBottom: "2.5rem" };
    // const openModal = (identifier) => {
    //     // alert('clicked')
    //     setCurrentIdentifier(identifier);
    //     setIsModalOpen(true)
    // }

    // const closeModal = () => {
    //     // alert('close')
    //     setIsModalOpen(false)
    // }

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
    const galleryContainerRef = useRef();
    useEffect(() => {
        setWidth(galleryContainerRef.current.scrollWidth - galleryContainerRef.current.offsetWidth);
    }, []);

    return (
        <>

            <div className="tempNav">
                <Navbar />
            </div>

            <div className="year-selector">
                <button className='year-selector24' style={{ boxShadow: `${isYear === '2024' ? '2px 3px #fff' : 'transparent'}` }} onClick={handle2024}>2024</button>
                <button className='year-selector23' onClick={handle2023}>2023</button>
            </div>

            <motion.div className="galleryContainer snaps-inline" ref={galleryContainerRef} drag="x" dragConstraints={isYear === '2024' ? { right: 0, left: -width } : { right: 0, left: -3501 }}>
                {isYear !== "2023" ? <>
                    <div className="first-row">
                        <GalleryCard identifier={1} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791111/ABRAXAS-Gallery24/ooc5jgmm8myaieky4pbt.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791095/ABRAXAS-Gallery24/wamjxelybf8wcyl6dico.jpg" />
                        <GalleryCard identifier={2} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791271/ABRAXAS-Gallery24/j8l7cfxtxgiitoxbh4qz.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791253/ABRAXAS-Gallery24/ndakojgncvvfzoxxvkgi.jpg" />
                        <GalleryCard identifier={3} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791133/ABRAXAS-Gallery24/bbziza0ffuqnqhrg3re5.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791241/ABRAXAS-Gallery24/hpopde3httnqpyvnwn2o.jpg" />
                        <GalleryCard identifier={4} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791095/ABRAXAS-Gallery24/wamjxelybf8wcyl6dico.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791127/ABRAXAS-Gallery24/fldhgtujt5fc4npg8bcq.jpg" />
                        <GalleryCard identifier={5} width={"420"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791081/ABRAXAS-Gallery24/s5zbyqui5zv3b0dfbxbj.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791050/ABRAXAS-Gallery24/ou0mggpmpie6nxze3fvy.jpg" />
                        {/* <GalleryCard identifier={6} width={"400"} image1="" image2="" />
                        <GalleryCard identifier={7} width={"400"} image1="" image2="" />
                        <GalleryCard identifier={9} width={"450"} image1="" image2="" />
                        <GalleryCard identifier={10} width={"400"} image1="" image2="" />
                        <GalleryCard identifier={11} width={"390"} image1="" image2="" /> */}


                        {/* {
                            isModalOpen ?
                                <ImageModel closeModal={closeModal} dataNumber={currentIdentifier} /> : null
                        } */}

                    </div>
                    <div className="second-row">
                        <GalleryCard identifier={100} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791047/ABRAXAS-Gallery24/vqtswrd0uiia6vuijaxy.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791263/ABRAXAS-Gallery24/tde9p4okprtudkcaazre.jpg" />
                        <GalleryCard identifier={101} width={"220"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791240/ABRAXAS-Gallery24/ibyqei8ecmxga9zf4kh4.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712790973/ABRAXAS-Gallery24/fxn5xdx5yjtfqjjsj6al.jpg" />
                        <GalleryCard identifier={102} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791066/ABRAXAS-Gallery24/yyqwf9x1uymoxz7fnsdk.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791065/ABRAXAS-Gallery24/py7bd5btp2yujxi1cqon.jpg" />
                        <GalleryCard identifier={103} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712790962/ABRAXAS-Gallery24/pude5plcom6q0xbtq2dy.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712793846/ABRAXAS-Gallery24/tfo3lskopqcx1uccmv6m.jpg" />
                        <GalleryCard identifier={104} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791247/ABRAXAS-Gallery24/yivjfkaqdkt4sxxb9vo4.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791112/ABRAXAS-Gallery24/tpmepkakcwjrxsnnpfjs.jpg" />
                        <GalleryCard identifier={105} width={"160"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791068/ABRAXAS-Gallery24/u3igh9qoa15y2ccsi4mu.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791069/ABRAXAS-Gallery24/kvsbydsewesyrptmgwyq.jpg" />
                        {/* <GalleryCard identifier={107} width={"440"} image1="" image2="" />
                        <GalleryCard identifier={108} width={"420"} image1="" image2="" />
                        <GalleryCard identifier={106} width={"230"} image1="" image2="" />
                        <GalleryCard identifier={110} width={"440"} image1="" image2="" />
                        <GalleryCard identifier={111} width={"430"} image1="" image2="" /> */}


                    </div>
                    {/* <div className="third-row">
                        <GalleryCard identifier={201} width={"492.5"} />
                        <GalleryCard identifier={202} />
                        <GalleryCard identifier={203} />
                        <GalleryCard identifier={204} />
                        <GalleryCard identifier={205} />
                        <GalleryCard identifier={206} />
                        <GalleryCard identifier={207} />
                        <GalleryCard identifier={208} />
                    </div> */}
                </>

                    :

                    <>
                        <div className="first-row">
                            <GalleryCard identifier={51} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786020/ABRAXAS-Gallery/p4bfierd3hosdoawdzsy.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786006/ABRAXAS-Gallery/da1doedbfe6wfipyavmj.jpg" />
                            <GalleryCard identifier={52} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786046/ABRAXAS-Gallery/czvg2fqh4pvsxnkezygo.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786102/ABRAXAS-Gallery/isrmwvh6wrzphavwqwz0.jpg" />
                            <GalleryCard identifier={53} width={"500"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786158/ABRAXAS-Gallery/wwfnjka7a7f79sms8k3h.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786128/ABRAXAS-Gallery/c8bzhu4vs5q7pac4lhg7.jpg" />
                            <GalleryCard identifier={54} width={"200"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786235/ABRAXAS-Gallery/rg85siezkcvt2bqp0wvz.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786260/ABRAXAS-Gallery/tepp6edaclwjozdlka9c.jpg" />
                            <GalleryCard identifier={55} width={"425"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786197/ABRAXAS-Gallery/fk5bva4o27pzmhpkasms.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786189/ABRAXAS-Gallery/jkxzltsyrq2ougu3g7yx.jpg" />
                            <GalleryCard identifier={56} width={"450"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786196/ABRAXAS-Gallery/beojwnkbswr2bp0yqge6.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786183/ABRAXAS-Gallery/j67owgbkvtsjerbotvob.jpg" />
                            <GalleryCard identifier={57} width={"380"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786228/ABRAXAS-Gallery/tfopj6kz3nyxfhx2s1ae.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786260/ABRAXAS-Gallery/ziuw6xbziugszlap3dvf.jpg" />
                            <GalleryCard identifier={58} width={"380"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786178/ABRAXAS-Gallery/a7txsa3jgy3ibf0hq6gh.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786829/ABRAXAS-Gallery/jed0xk67xggimelzxbtt.jpg" />
                            <GalleryCard identifier={59} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786855/ABRAXAS-Gallery/vck3og1ryjcduzhgpv4b.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786823/ABRAXAS-Gallery/chrybl6g6f6ekvxbejil.jpg" />
                            <GalleryCard identifier={60} width={"200"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786733/ABRAXAS-Gallery/mnjj7tbqem671rhtylao.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786796/ABRAXAS-Gallery/sus2vgtq40wubtq2sadc.jpg" />
                            <GalleryCard identifier={61} width={"350"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786393/ABRAXAS-Gallery/rhml96lifkfebeicz1fk.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786393/ABRAXAS-Gallery/spqk62rce7w3cmezvc5y.jpg" />
                            <GalleryCard identifier={62} width={"200"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786367/ABRAXAS-Gallery/elsfsfnj8uqxletmqwn1.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786396/ABRAXAS-Gallery/gvenlgaawy3agahrda6r.jpg" />
                            {/* <GalleryCard identifier={63} width={"400"} image1="" image2="" />
                            <GalleryCard identifier={64} width={"380"} image1="" image2="" />
                            <GalleryCard identifier={65} width={"400"} image1="" image2="" /> */}
                        </div>
                        <div className="second-row">
                            <GalleryCard identifier={151} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786444/ABRAXAS-Gallery/cujhupfzozmajt6smxhu.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786649/ABRAXAS-Gallery/diqxtbkoilrvrkkantpk.jpg" />
                            <GalleryCard identifier={152} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786432/ABRAXAS-Gallery/tvnhaesmg9cdtefkzsad.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786405/ABRAXAS-Gallery/fvbgtwgqtpjnnpbx0nzd.jpg" />
                            <GalleryCard identifier={153} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786419/ABRAXAS-Gallery/auwanfayym5bf39jiqmp.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786425/ABRAXAS-Gallery/m1mssufubzlghr8v1pf1.jpg" />
                            <GalleryCard identifier={155} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786438/ABRAXAS-Gallery/nkrzk3ftypnwavjam6qk.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786440/ABRAXAS-Gallery/rp4kwxbm8rrkibukj3g6.jpg" />
                            <GalleryCard identifier={154} width={"200"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786183/ABRAXAS-Gallery/uwaejnjsr94gaomr7qge.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786501/ABRAXAS-Gallery/eys7ki2bq4jlnupbeish.jpg" />

                            <GalleryCard identifier={156} width={"430"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786522/ABRAXAS-Gallery/my37trcuu4ztxvyt0yoo.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786456/ABRAXAS-Gallery/z1o2ux3jaa4gcip5ykoc.jpg" />
                            <GalleryCard identifier={157} width={"500"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786326/ABRAXAS-Gallery/ogpo1u1jdgm2juxvhnfx.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786161/ABRAXAS-Gallery/enpdw2f7wob0wriki5zk.jpg" />
                            <GalleryCard identifier={158} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786127/ABRAXAS-Gallery/egphao8aka9sebkl7zm3.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786158/ABRAXAS-Gallery/g4uyycewuugvjxrx8zp9.jpg" />
                            <GalleryCard identifier={159} width={"400"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786160/ABRAXAS-Gallery/kwrlgqhrvc3ibrrrm4ks.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786304/ABRAXAS-Gallery/mbnvvdxvbhb4wui0vcbo.jpg" />
                            <GalleryCard identifier={160} width={"200"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786650/ABRAXAS-Gallery/rcwg5diqswfs1aixi2qc.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786663/ABRAXAS-Gallery/mae1sq8wttvumzjoypth.jpg" />
                            <GalleryCard identifier={161} width={"600"} image1="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786074/ABRAXAS-Gallery/ctcvj6dgdt7ckw6nypue.jpg" image2="https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786279/ABRAXAS-Gallery/w8s0oyj4gb1vrmlxjval.jpg" />
                            {/* <GalleryCard identifier={162} width={"250"} image1="" image2="" />
                            <GalleryCard identifier={163} width={"400"} image1="" image2="" />
                            <GalleryCard identifier={164} width={"380"} image1="" image2="" />
                            <GalleryCard identifier={165} width={"400"} image1="" image2="" /> */}
                        </div>
                        {/* <div className="third-row">
                            <GalleryCard identifier={251} width={"492.5"} />
                            <GalleryCard identifier={252} />
                            <GalleryCard identifier={253} />
                            <GalleryCard identifier={254} />
                        </div> */}
                    </>}
            </motion.div>

        </>

    );
}

export default Gallery;