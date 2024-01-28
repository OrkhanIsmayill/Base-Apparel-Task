import React, { useState } from 'react'

import hero from "..//assets/images/hero-desktop.jpg"
import mobileHero from '../assets/images/hero-mobile.jpg'
import icon from '..//assets/images/logo.svg'
import arrow from '..//assets/images/icon-arrow.svg'

import "@fontsource/josefin-sans";



const Home = () => {

    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(true);
    const [validColor,setValidColor] = useState("1px solid hsl(0, 36%, 70%) ")

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(email);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const checkEmail = (e) => {

        if (email === '' && isValidEmail === false) {
            console.log("Email is not entering or is not true");
            setValid(false)
            setValidColor("3px solid red")

        }
        else if (isValidEmail === true) {
            console.log("Success");

        }

    }


    return (


        <div className='homepage'>
            <div className='mainContainer'>
                <div className='baseContainer'>
                    <div className='baseIcon'>
                        <img src={icon} alt="" />
                    </div>


                    <div className='baseContent'>
                        <h1><span>WE'RE</span><br />COMING <br /> SOON</h1>
                        <p>Hello fellow shoppers! We're currently building our new fashion store.Add your email below to stay up-to-date with announcements and our launch deals</p>

                    </div>


                    <div className='emailInput'>

                        <div className='formDiv'>
                            <form action="" className='form' >
                                <input 
                                    type="email"
                                    placeholder='Email Address'
                                    value={email}
                                    onChange={handleChange}
                                    style={{border:validColor}}
                                />
                            </form>
                            {!valid && <p className='validMessage'>Please provide a valid email</p>}
                        </div>

                        <div className='buttonDiv' >
                            <button className='inputButton' onClick={checkEmail}>
                                <img src={arrow} alt="" />
                            </button>

                        </div>

                    </div>

                </div>

                <div className='baseImage'>
                    <img src={hero} alt="" />
                </div>
                



            </div>

        </div>

    )
}

export default Home