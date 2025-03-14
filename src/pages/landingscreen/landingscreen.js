import React, { useState } from "react";
import Header from "../../components/header/header";
import insuranceimage from "../../images/landingpageinsrance image.jpg";
import twowheelers from "../../images/two wheeler.gif";
import car from "../../images/car wheeler.gif";
import schoolvehicle from "../../images/school bus.gif"
import doctors from "../../../src/images/Doctores.gif";
import bajaj from '../../../src/images/bajaj..jpg';
import icic from '../../../src/images/icici.jpg';
import hdfc from '../../../src/images/hdfc.jpg';
import godigit from '../../../src/images/go digit.jpg';
import SBI from '../../../src/images/sbi.jpg';
import reliance from '../../../src/images/reliance.jpg';
import Royal from '../../../src/images/royal.jpg';
import tataagi from '../../../src/images/tataaig.jpg';
import iffco from '../../../src/images/iffco.jpg';
import star from '../../../src/images/star health.jpg';
import care from '../../../src/images/care.jpg';
import icicpru from '../../../src/images/icicipru.jpg';
import tataaia from '../../../src/images/tataaig.jpg';
import hdfclife from '../../../src/images/hadfclife.jpg';
import whatsappicon from '../../../src/images/whatsappicon.jpg';
import landingimage1 from '../../../src/images/landingimage2.jpg';
import landingimage2 from '../../../src/images/langingimage3.jpg';
import landingimage4 from '../../../src/images/landingimage4.jpg';
import security from '../../../src/images/security.jpg';
import userfriendly from '../../../src/images/user-friendly.jpg';
import support from '../../../src/images/support.png';
import peaceofmind from '../../../src/images/peaceofmind.png';
import instant from '../../../src/images/instants.jpg';
import assist from '../../../src/images/assist.jpg';

import './landingscreen.css';

const Landingscreen = () => {

    const openInNewTab = (url) => {
        window.open(url, "_blank"); // Opens in a new tab
        
    
    };

    const [isOpen, setIsOpen] = useState(false);

    const logos = [
        { src: bajaj, alt: 'Bajaj Allianz' },
        { src: icic, alt: 'ICICI Lombard' },
        { src: hdfc, alt: 'HDFC Ergo' },
        { src: godigit, alt: 'Go Digit' },
        { src: SBI, alt: 'SBI General Insurance' },
        { src: reliance, alt: 'Reliance' },
        { src: Royal, alt: 'Royal Sundaram' },
        { src: tataagi, alt: 'TATA AIG' },
        { src: iffco, alt: 'IFFCO TOKIO' },
        { src: star, alt: 'Star Health' },
        { src: care, alt: 'Care Health' },
        { src: icicpru, alt: 'ICICI Prudential' },
        { src: tataaia, alt: 'TATA AIA' },
        { src: hdfclife, alt: 'HDFC Life' }
    ];
    

    const styles = {
        container: {
            padding: "40px",
            textAlign: "center",
        },
        title: {
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        description: {
            fontSize: "18px",
            marginBottom: "40px",
            color: "#555",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // Ensures 3 columns
            gap: "20px",
            justifyContent: "center",
            padding: "20px",
        },
        card: {
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
        },
    };


    

    return(
        <div className="container">
            <Header />
        
            <div class="curved-text">
                <svg width="500" height="200">
                    <path id="curvePath" d="M20,190 Q350,130 470,210" fill="transparent" />
                    <text font-size="50px" font-weight="bold" text-anchor="middle" fill="#14457f">
                        <textPath href="#curvePath" startOffset="50%">
                            I-PRO INFINITY
                        </textPath>
                    </text>
                </svg>
            </div>


        
         <div className="insurance-image">
                <img src={insuranceimage} alt="insurance-image" className="insurance-img"/>
                
         </div>

         <div className="two-wheeler">
           <img src={twowheelers} alt="two -wheeler" className="twowheeler-img"/>
                <button class="vehicle-btn-bike" onClick={() => openInNewTab("https://uatweb.iproinfinity.com/two-wheeler-insurance/#/")}>Two-Wheeler</button>
                
         </div>

         <div className="car">
         <img src={car} alt="car" className="car-img"/>
                <button className="vehicle-btn-car" onClick={() => openInNewTab("https://uatweb.iproinfinity.com/car-insurance/#/")}>
                    Car
                </button>
         </div>

        <div className="school-vehicle">
         <img src={schoolvehicle} alt="school-vehicle" className="school-vehicle-img"/>
                <button class="vehicle-btn-cv" onClick={() => openInNewTab("https://uatweb.iproinfinity.com/commercial-vehicle-insurance/#/")}>Commercial Vehicle</button>
        </div>

          


        <div className="doctors">
            <img src={doctors} alt="doctors" className="doctors-img"/>
                <button class="vehicle-btn-health" onClick={() => openInNewTab("https://uatweb.iproinfinity.com/health-insurance/#/")}>Health</button>
        </div>
            <div className='text2'><strong>Why choose i-Pro Infinity?</strong></div>
            
            <div className='text3'><p>Why choose i-Pro Infinity? Because it offers reliable protection with advanced technology, ensuring your safety at all times.Its user-friendly design makes it easy to set up and use,
             providing a hassle-free experience. With 24/7 support, you can count on us whenever you need assistance.
              Most importantly, i-Pro Infinity gives you peace of mind, knowing that you're 
              always covered. Choose i-Pro Infinity for a safer, worry-free life.</p></div>

              <div className="background-color">
              
                <div style={styles.grid}>
                    <div style={styles.card}>
                        <h3>Reliable Protection</h3>
                        <img src={security} className="security"/>
                        <p>
                            Trust in our advanced technology to keep you safe. Our state-of-the-art
                            systems are designed to detect and respond to threats instantly,
                            providing you with the highest level of security.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3>User-Friendly</h3>
                        <img src={userfriendly} className="security" />
                        <p>
                            Easy to set up and use, ensuring a hassle-free experience. Our intuitive
                            interface and straightforward installation process mean you can start
                            protecting what matters most without any technical difficulties.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3>24/7 Support</h3>
                        <img src={support} className="security" />
                        <p>
                            We're here for you, anytime you need us. Our dedicated support team is
                            available around the clock to assist with any questions or issues.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3>Peace of Mind</h3>
                        <img src={peaceofmind} className="security" />
                        <p>
                            Feel secure knowing i-Pro Infinity has you covered. Our comprehensive
                            protection gives you the confidence to live your life without worry.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3>Instant Policy</h3>
                        <img src={instant} className="security" />
                        <p>
                            No more waiting for physical policies. Employees can now print or download
                            the policy immediately after a successful payment!
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3>Assistance from Experts</h3>
                        <img src={assist} className="security" />
                        <p>
                            Getting into the world of insurance can be complicated. We have leading
                            insurance experts that can guide you through the entire process.
                        </p>
                    </div>
                </div>
              </div>
            <div className="landing-container">
                <h2 className="heading">Our exclusive offers. Just for you.</h2>
                <div className="grid-container">
                    <div className="offer-card">
                        <h3>Secure your life with the iPro health insurance plan</h3>
                        <ul>
                            <li>Offering comprehensive coverage</li>
                            <li>Affordable premiums</li>
                            <li>Exceptional customer support</li>
                            <li>Extensive network of hospitals</li>
                            <li>Hassle-free claims processing</li>
                        </ul>
                    </div>
                    <div className="offer-card highlight">
                        <h3>Discover the best motor offers with iPro</h3>
                        <ul>
                            <li>Featuring competitive rates</li>
                            <li>Extensive coverage</li>
                            <li>24/7 roadside assistance</li>
                            <li>Easy claim settlements</li>
                            <li>Flexible payment options</li>
                        </ul>
                    </div>
                    <div className="offer-card">
                        <h3>Experience unparalleled corporate solutions with iPro</h3>
                        <ul>
                            <li>Offering tailored insurance packages</li>
                            <li>Dedicated account management</li>
                            <li>Comprehensive risk assessment</li>
                            <li>Seamless integration with benefits programs</li>
                            <li>Ensuring your team is protected</li>
                        </ul>
                    </div>
                    <div className="offer-card claims">
                        <h3>Take advantage of iPro's best offer for claims</h3>
                        <ul>
                            <li>Featuring rapid processing</li>
                            <li>Minimal paperwork, 24/7 support</li>
                            <li>High claim settlement ratios</li>
                            <li>Ensuring a hassle-free experience when you need it most</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="articles-container">
                <div className="article-card">
                    <div className="image-placeholder">
                        <img src={landingimage1} className="landingimage1"/>
                    </div>
                    <div className="content">
                        <h3>The Importance of Financial Wellness Programs for Employee Productivity</h3>
                        <ul>
                            <li>
                                This article will highlight how financial wellness programs can
                                significantly impact employee productivity and overall business
                                performance.
                            </li>
                            <li>
                                It will discuss the benefits of reducing financial stress among
                                employees and promoting better financial habits.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="article-card">
                    <div className="image-placeholder">
                        <div className="image-placeholder">
                            <img src={landingimage2} className="landingimage2" />
                        </div>  
                    </div>
                    <div className="content">
                        <h3>Choosing the Right Insurance Plan: A Guide for Employers</h3>
                        <ul>
                            <li>
                                This guide will help employers navigate the complexities of
                                selecting insurance plans that meet the diverse needs of their
                                workforce.
                            </li>
                            <li>
                                It will cover key considerations such as coverage options, cost
                                management, and employee satisfaction.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="article-card">
                    <div className="image-placeholder">
                        <div className="image-placeholder">
                            <img src={landingimage4} className="landingimage2" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>Trends in Corporate Insurance: What Employers Should Know</h3>
                        <ul>
                            <li>
                                This article will explore current trends in corporate insurance,
                                focusing on innovative solutions and emerging practices that can
                                benefit employers.
                            </li>
                            <li>
                                It will discuss topics like telemedicine, wellness incentives, and
                                digital insurance platforms.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="insurance-container-landingpage">
            {logos.map((logo, index) => (
                <div key={index} className="logo-box">
                    <img src={logo.src} alt={logo.alt} className="insurance-logo" />
                </div>
            ))}
        </div>

            <div className="testimonials-container">
                <h2>Feedback from Our Customers</h2>
                <p>Trusted by many, i-Pro Infinity delivers exceptional insurance coverage.</p>
                <div className="testimonials">
                    <div className="card">
                        <div className="image-circle yellow-bg">
                            <img src="/images/john.png" alt="John D." />
                        </div>
                        <h3>John D., New York</h3>
                        <p>I have been a i-pro healthInsurance customer for over five years now. Their plans are affordable, and the customer service is exceptional. I recently had a medical emergency, and the cashless treatment at one of their network hospitals made the process stress-free. Highly recommended!</p>
                    </div>

                    <div className="card">
                        <div className="image-circle grey-bg">
                            <img src="/images/raj.png" alt="Raj P." />
                        </div>
                        <h3>Raj P., Texas</h3>
                        <p>"The flexibility of i-pro Health’s plans allowed me to tailor a policy that fits my family's needs perfectly. From preventive care to critical illness coverage, they have it all. The wellness programs are an added bonus that has helped us stay on top of our health."</p>
                    </div>

                    <div className="card">
                        <div className="image-circle blue-bg">
                            <img src="/images/linda.png" alt="Linda S." />
                        </div>
                        <h3>Linda S., Florida</h3>
                        <p>I appreciate the transparency and clarity in i-pro health Insurance’s policy details. There are no hidden clauses, and everything is explained upfront. Filing a claim was quick and easy, with prompt settlement. I’m very satisfied with their service.</p>
                    </div>

                    <div className="card">
                        <div className="image-circle blue-bg">
                            <img src="/images/linda.png" alt="Linda S." />
                        </div>
                        <h3>Linda S., Florida</h3>
                        <p>I appreciate the transparency and clarity in i-pro health Insurance’s policy details. There are no hidden clauses, and everything is explained upfront. Filing a claim was quick and easy, with prompt settlement. I’m very satisfied with their service.</p>
                    </div>
                </div>
            </div>

            <div class="help-container">
                <a
                    href="https://wa.me/916361278922?text=Hello!%20I%20need%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="help-button">
                        <img src={whatsappicon} alt="Need Help?" />
                        <p>Need Help?</p>
                    </div>
                </a>
            </div>

            <div>
                {/* POS Button */}
                <button className="pos-button" onClick={() => setIsOpen(true)}>
                    POS
                </button>

                {/* Modal Popup */}
                {isOpen && (
                    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
                            <h2>Point of Sale</h2>
                            <input className="Name" type="text" placeholder="Name" />
                            <input className="Ph-no" type="text" placeholder="Phone Number" />
                            <input className="city" type="text" placeholder="City" />
                            <textarea className="description" placeholder="Description"></textarea>
                            <input className="email" type="email" placeholder="Email" />
                            <button className="sumbit" type="submit">Submit</button>
                        </div>
                    </div>
                )}
            </div>
            </div>
    );
}

export default Landingscreen;