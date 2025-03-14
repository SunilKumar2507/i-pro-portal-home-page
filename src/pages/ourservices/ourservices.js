import React from 'react';
import Header from "../../components/header/header";
import ourservicescreenimg from "../../../src/images/City Businessman.gif";
import time24hrs from "../../../src/images/time24hrs.png";
import customerinterview from "../../../src/images/Customer Interview Animation - Free Download Business Animations _ IconScout 1.png"
import businessmeeting from "../../../src/images/businessmeeting.jpg";
import business1 from "../../../src/images/business1.jpg";
import business2 from "../../../src/images/business2.jpg";
import business3 from "../../../src/images/business3.jpg"
import business4 from "../../../src/images/businesss4.jpg";
import timedifferent from "../../../src/images/timedifferent.jpg";
import timedifferent2 from "../../../src/images/timedifferent2.jpg";
import './ourservices.css';

const OurServices = () => {
    const cardData = [
        {
            img: business1,
            text: `Whichever industry or business you operate in, with our experience, 
            we can source the best and optimal insurance covers fit for your business needs.`
        },
        {
            img: business2,
            text: `We appreciate that different industries face varied challenges and risks, 
            and our insurance experts are ready to assess your particular requirements. 
            We work with your business to keep well-detailed business and employee records, 
            giving you a clearer picture of operational aspects so your insurance proposals 
            align with your needs.`
        },
        {
            img: business3,
            text: `Our detailed insights into solutions, costs, coverage, and other relevant 
            information ensure you are informed. We arrange a consultation session with you 
            to explain our proposal so you can make informed decisions on how to proceed.`
        },
        {
            img: business4,
            text: `From simple retail insurance to a major home, health to complex coverage 
            solutions such as property, materials, transportation, and organization, our 
            experience and expertise ensure we identify the right insurance covers for your 
            business.`
        }
    ];
    return (

        <div className="services-containers">
            <Header />
            <div className="services-content">
                <h2 className="services-title">Our Services</h2>
                <p className='service-content-paragraph'>
                    At IPRO Insurance, we are committed to providing comprehensive and reliable
                    insurance solutions tailored to meet the diverse needs of our clients. Whether
                    you’re looking for personal or commercial coverage, our expert team is dedicated
                    to offering the peace of mind that comes with knowing you’re protected by a trusted partner.
                </p>

                <p className="highlighted-text">
                    BUSINESS PHILOSOPHY AT I-PRO INFINITY IS SIMPLY TO PROVIDE WHAT OUR CLIENTS WANT AND VALUE!
                </p>

                <ul className="services-list">
                    <li>Confidence that their broker understands their business and industry.</li>
                    <li>A broker that puts them at the centre of all its activities and decisions.</li>
                    <li>A team that will provide dedicated support when they need it most, at the time of a claim.</li>
                    <li>A broker that insurance companies respect and actively seek to write business with.</li>
                    <li>A broker who invests in technology to provide best service.</li>
                </ul>
            </div>

            <div className="services-image">
                <img src={ourservicescreenimg} alt="Insurance Expert" />
            </div>

            <div className="services-image2">
                <img src={time24hrs} alt="Insurance Expert" />
            </div>

            <p className="highlighted-text2">
                Personal  Insurance
            </p>
            <br></br>
            <br></br>
            <p className="highlighted-text2-contents">At i-Pro  Insurance, we understand that your personal life is filled with unique and valuable assets that deserve the best protection. Our comprehensive personal insurance solutions are designed to safeguard your home, vehicle, health, and financial well-being, ensuring you can enjoy peace of mind in every aspect of your life.</p>


            <p className="highlighted-text3">
                Corporate Insurance
            </p>
            <p className="highlighted-text3-content">At i-Pro Insurance, we understand the complexities and risks associated with running a business. Our comprehensive corporate insurance solutions are designed to protect your company’s assets, employees,
                and operations, allowing you to focus on growth and success. Whether you’re a small business or a large corporation, we offer tailored insurance packages to meet your specific needs.</p>
            <div className="services-image33">
                <img src={customerinterview} alt="Insurance Expert" />
            </div>

            <p className="highlighted-text4">
                WHY DO YOU NEED AN INSURANCE BROKER?
            </p>
            
            <p className="highlighted-text4-content">The world of insurance is complex and everchanging. The insurance covers provided by the policy you bought last year may no longer be suitable or sufficient for your needs. You may not know that the quoted premiums are competitive? And if you are just starting out or expanding your business, how do you know what types of insurance you need? And if the insurance you buy is good enough to protect your business against the risk exposures? A well experienced and suitably qualified professional can help assess and source the types and levels of cover that you need, saving you the trouble and effort. The consequences of not having the right insurance in place can be disastrous, and sometimes this only comes to light when you need to make a claim, which might be too late.</p>
           

            <div className="business-container">
                <h2 className="business-title">WE UNDERSTAND YOUR BUSINESS</h2>
                <div className="business-cards">
                    {cardData.map((card, index) => (
                        <div className="business-card" key={index}>
                            <img src={card.img} alt={`Business Info ${index + 1}`} className="business-img" />
                            <p className="business-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ipro-container">
                <h2 className="ipro-title">WHAT MAKES I-PRO INFINITY DIFFERENT?</h2>
                <div className="ipro-content">
                    <div className="ipro-card">
                        <h3 className="ipro-subtitle">QUITE SIMPLY, THE PEOPLE</h3>
                        <img src={timedifferent} alt="People" className="ipro-img" />
                        <p className="ipro-text">
                            We recruit and retain talented, committed and motivated individuals that share our
                            vision for providing safe and regulated support throughout our engagement with each
                            one of our valued clients. They are developed and take pride in our unique culture
                            of customer service delivery which is innovative and forward-thinking.
                        </p>
                    </div>
                    <div className="ipro-card">
                        <h3 className="ipro-subtitle">CLAIMS FOCUS</h3>
                        <img src={timedifferent2} alt="Claims" className="ipro-img" />
                        <p className="ipro-text">
                            The unfortunate point at which you have to make a claim on your insurance is sometimes
                            called the moment of truth, as an acid test for your insurance coverage. It is the moment
                            that you and your insurer (promptly) deliver the agreed benefits to minimize the loss
                            and disruption to your business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
