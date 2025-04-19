import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-m.webp';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

const Home = () =>{

    const [letterClass, setLetterClass]  = useState('text-animate')
    const nameArray = ['M','a','i','y','a','r','a','s','i']

    useEffect(() =>{
        const timer = setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
        return () =>clearTimeout(timer)
    },[])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br/>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                {/* <img src={LogoTitle} alt="developer" /> */}
                <AnimatedLetters letterClass = {letterClass} 
                strArray={nameArray} 
                idx={17}/>
                </h1>
                <h2>Aspiring Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home;
