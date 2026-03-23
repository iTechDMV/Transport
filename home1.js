import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container10">
      <Helmet>
        <title>Presentation Page</title>
        <meta property="og:title" content="Presentation Page" />
        <link
          rel="canonical"
          href="https://presentation-page-dcg8l2.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://presentation-page-dcg8l2.teleporthq.app/"
        />
      </Helmet>
      <div className="home1-container11">
        <div className="home1-container12">
          <Script
            html={`<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--navy);
  color: var(--slate);
  line-height: 1.6;
  overflow-x: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tagline">Non-CDL Hot Shot Hauling</span>
            <h1 className="hero-headline">
              Fast, Reliable Hauling For Your Critical Freight
            </h1>
            <p className="home1-thq-hero-equipment-elm">
              Gooseneck Trailers | 3500 Series Pickup Trucks
            </p>
            <p className="hero-subtext">
              Professional non-CDL hot shot hauling with gooseneck trailers
              pulled by 3500 series pickup trucks. Perfect for urgent, smaller
              loads that need fast response times and access to tight spaces.
            </p>
            <div className="hero-actions">
              <a href="#quote">
                <div className="hero-cta-button">
                  <span>Get A Quote Now</span>
                </div>
              </a>
              <div className="hero-secondary-button">
                <span>Our Services</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Specialized Transport Services</h2>
            <div className="services-divider"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Hot Shot Hauling</h3>
              <p className="service-description">
                Time-sensitive loads delivered with 3500 series pickups and
                gooseneck trailers. No CDL required means faster dispatch and
                access to tighter spaces for urgent deliveries.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                    <path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Flatbed Transport</h3>
              <p className="service-description">
                Gooseneck flatbed trailers pulled by 3500 series trucks for
                construction equipment and machinery. Maneuverable setup perfect
                for job site access where larger trucks can&apos;t go.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Expedited Freight</h3>
              <p className="service-description">
                Direct, non-stop delivery using our 3500 series pickup fleet
                with gooseneck trailers. Quick dispatch with no CDL delays for
                your most time-critical shipments.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783.378l.074.108l3 5l.055.103l.04.107l.029.109l.016.11L22 11v6a1 1 0 0 1-1 1h-1.171a3.001 3.001 0 0 1-5.658 0H9.829a3.001 3.001 0 0 1-5.658 0H3a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2zM7 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m.434-9H14v3h5.234z"
                  ></path>
                </svg>
              </div>
              <h3 className="service-name">Specialized Haul</h3>
              <p className="service-description">
                Expert handling of cargo within 3500 series truck capacity
                limits. Gooseneck trailers provide stability for high-value
                assets and industrial components requiring quick, flexible
                transport.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="why-container">
          <div className="why-grid">
            <div className="why-content">
              <h2 className="why-title">Engineered For Reliability</h2>
              <p className="why-lead">
                We don&apos;t just move freight; we provide the backbone for
                your supply chain with uncompromising standards.
              </p>
              <div className="why-features">
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="why-feature-text">
                    <h4>24/7 Availability</h4>
                    <p>
                      Dispatch and drivers ready to move at any hour, day or
                      night.
                    </p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                    </svg>
                  </div>
                  <div className="why-feature-text">
                    <h4>Experienced Drivers</h4>
                    <p>
                      Vetted professionals with clean records and specialized
                      training.
                    </p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      ></path>
                    </svg>
                  </div>
                  <div className="why-feature-text">
                    <h4>Nationwide Coverage</h4>
                    <p>
                      Fully licensed and insured to operate across all lower 48
                      states.
                    </p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <span className="currency-symbol">$</span>
                  </div>
                  <div className="why-feature-text">
                    <h4>Competitive Rates</h4>
                    <p>
                      Transparent pricing with no hidden fees, maximizing your
                      bottom line.
                    </p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="why-feature-text">
                    <h4>No CDL Required</h4>
                    <p>
                      Non-CDL operation means faster dispatch times and no CDL
                      driver delays. Our 3500 series trucks with gooseneck
                      trailers offer superior maneuverability for tight spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="stat-box">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
              <img
                src="https://images.pexels.com/photos/6940962/pexels-photo-6940962.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                alt="Hot Shot Trucking Performance"
                className="why-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container">
          <div className="about-split">
            <div className="about-image-wrapper">
              <img
                src="https://images.pexels.com/photos/35996049/pexels-photo-35996049.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                alt="Our 3500 Series Pickup Fleet with Gooseneck Trailers"
                className="about-image"
              />
              <div className="about-experience-badge">
                <span className="years">15+</span>
                <span className="text">Years on the Road</span>
              </div>
            </div>
            <div className="about-text-wrapper">
              <h2 className="about-title">Our Story &amp; Mission</h2>
              <p className="about-p">
                We specialize exclusively in non-CDL hot shot hauling using 3500
                series pickup trucks with gooseneck trailers. This intentional
                focus allows us to provide faster response times and access to
                locations where larger trucks simply cannot operate.
              </p>
              <p className="about-p">
                Our mission is to deliver quick, flexible local and regional
                transport for urgent, smaller loads. By specializing in 3500
                series pickups with gooseneck setups, we eliminate CDL delays
                and offer the agility your time-critical freight demands.
              </p>
              <div className="about-values">
                <div className="value-item">
                  <strong>Safety First:</strong>
                  <span>
                    {' '}
                    Zero-compromise safety protocols for every load.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="value-item">
                  <strong>Integrity:</strong>
                  <span>
                    {' '}
                    Real-time tracking and honest communication.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="value-item">
                  <strong>Innovation:</strong>
                  <span>
                    {' '}
                    Modern equipment and route optimization technology.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="area-section">
        <div className="area-container">
          <div className="area-card">
            <div className="area-info">
              <h2 className="area-title">Nationwide Reach</h2>
              <p className="area-text">
                From the industrial hubs of the Midwest to the ports of the Gulf
                Coast, our fleet of 3500 series pickup trucks with gooseneck
                trailers covers the continental United States. We specialize in
                cross-state routes and regional expedited loops where quick
                response matters.
              </p>
              <ul className="area-list">
                <li>
                  <span>Lower 48 States Coverage</span>
                </li>
                <li>
                  <span>Port &amp; Rail Head Access</span>
                </li>
                <li>
                  <span>Oil &amp; Gas Field Specialists</span>
                </li>
                <li>
                  <span>Construction Site Delivery</span>
                </li>
              </ul>
            </div>
            <div className="area-map-wrapper">
              <div className="map-overlay"></div>
              <img
                src="https://images.pexels.com/photos/32307/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                alt="Service Area Map"
                className="area-map-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-heading">What Our Partners Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonial-text">
                When a critical part failed on our site, these guys got the
                replacement across three states in under 12 hours. Absolute
                lifesavers.
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">James Miller</span>
                  <span className="author-role">
                    Operations Manager, Titan Energy
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonial-text">
                The most reliable hot shot service we&apos;ve ever used. Their
                drivers are professional, and their communication is second to
                none.
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Sarah Chen</span>
                  <span className="author-role">
                    Logistics Director, BuildRight Co.
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonial-text">
                Fair pricing and they actually care about the cargo. We trust
                them with our highest-value industrial machinery every time.
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Robert Vance</span>
                  <span className="author-role">
                    Logistics Coordinator, IronWorks Inc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="quote" className="cta-section">
        <div className="cta-container">
          <div className="cta-grid">
            <div className="cta-info">
              <h2 className="cta-title">Ready To Move Your Freight?</h2>
              <p className="cta-text">
                Contact us now for an immediate quote or to discuss your
                long-term logistics needs. We are standing by to get your load
                on the road.
              </p>
              <div className="cta-phone-block">
                <span className="phone-label">Direct Dispatch:</span>
                <a href="tel:18005550199">
                  <div className="phone-number">
                    <span>1-800-555-0199</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-form-wrapper">
              <form
                data-form-id="44147720-fd2c-45b3-9a37-e6539a52a6ff"
                className="quote-form"
              >
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required="true"
                    id="thq_textinput_V3yA"
                    name="textinput"
                    data-form-field-id="thq_textinput_V3yA"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required="true"
                    id="thq_textinput_yJrK"
                    name="textinput"
                    data-form-field-id="thq_textinput_yJrK"
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    id="thq_textinput_IY47"
                    name="textinput"
                    data-form-field-id="thq_textinput_IY47"
                  />
                  <input
                    type="text"
                    placeholder="Delivery Destination"
                    id="thq_textinput_L3M6"
                    name="textinput"
                    data-form-field-id="thq_textinput_L3M6"
                  />
                </div>
                <textarea
                  placeholder="Load Details (Dimensions, Weight, Special Instructions)"
                  id="thq_textarea_PWFh"
                  name="textarea"
                  data-form-field-id="thq_textarea_PWFh"
                ></textarea>
                <button
                  type="submit"
                  id="thq_button_pCxk"
                  name="button"
                  data-form-field-id="thq_button_pCxk"
                  className="form-submit"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">
                <span>
                  {' '}
                  TITAN
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>HAUL</span>
              </h3>
              <p className="footer-tag">
                Professional Specialized Transport Solutions
              </p>
              <div className="footer-compliance">
                <span>DOT#: 1234567</span>
                <span>MC#: 987654</span>
              </div>
            </div>
            <div className="footer-links">
              <h4 className="footer-heading">Services</h4>
              <ul>
                <li>
                  <a href="#">
                    <div>
                      <span>Hot Shot</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span>Flatbed</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span>Expedited</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span>Heavy Haul</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4 className="footer-heading">Contact Info</h4>
              <p>
                <span>
                  {' '}
                  123 Logistics Way, Suite 400
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  {' '}
                  Houston, TX 77002
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p>Email: dispatch@titanhaul.com</p>
              <p>Phone: 1-800-555-0199</p>
            </div>
            <div className="footer-social">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-icons">
                <a href="#">
                  <div aria-label="LinkedIn">
                    <span>LN</span>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Facebook">
                    <span>FB</span>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram">
                    <span>IG</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              <span>
                {' '}
                &amp;copy; 2024 Titan Haul Logistics. All rights reserved. |
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="#">
                <div>
                  <span>Privacy Policy</span>
                </div>
              </a>
              <span>
                {' '}
                |
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="#">
                <div>
                  <span>Terms of Service</span>
                </div>
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="home1-container22">
        <div className="home1-container23">
          <Script
            html={`<style>
        @keyframes scroll {0% {opacity: 1;
top: 8px;}
100% {opacity: 0;
top: 24px;}}@keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home1-container24">
        <div className="home1-container25">
          <Script
            html={`<script defer data-name="industrial-logistics">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          })
        }
      })
    })

    // Simple scroll reveal effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Apply reveal to specific sections
    const revealElements = document.querySelectorAll(".service-card, .why-content, .why-visual, .about-text-wrapper, .testimonial-card, .cta-info, .cta-form-wrapper")

    revealElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      observer.observe(el)
    })

    // Parallax effect for hero background
    window.addEventListener("scroll", () => {
      const hero = document.querySelector(".hero-section")
      const scroll = window.pageYOffset
      if (hero) {
        hero.style.backgroundPositionY = scroll * 0.5 + "px"
      }
    })

    // Form Submission handling (prevent default for demo)
    const quoteForm = document.querySelector(".quote-form")
    if (quoteForm) {
      quoteForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const btn = quoteForm.querySelector(".form-submit")
        const originalText = btn.innerText
        btn.innerText = "SENDING..."
        btn.style.backgroundColor = "#2ecc71"

        setTimeout(() => {
          btn.innerText = "QUOTE REQUESTED ✓"
          quoteForm.reset()
          setTimeout(() => {
            btn.innerText = originalText
            btn.style.backgroundColor = ""
          }, 3000)
        }, 1500)
      })
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home1-container26">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home1-icon35"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home1-text57">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home1
