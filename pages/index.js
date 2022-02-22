import Head from 'next/head'
import {useState} from 'react'

export default function Home() {
  const [inputValues, setInputValues] = useState({name: '', email: '', subject: '', message: ''})
  const [showThankYouMessage, setShowThankYouMessage] = useState(false)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setInputValues({...inputValues, [name]: value})
  }


  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("Sending form message")
    fetch(`${process.env.NEXT_PUBLIC_FORM_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        "name": inputValues.name,
        "email": inputValues.email,
        "subject": inputValues.subject,
        "message": inputValues.message,
        "fields": {
          "device": window.navigator.userAgent,
        }
      })
    }).then(res => setShowThankYouMessage(true))
      .catch(err => {})
    setInputValues({name: '', email: '', subject: '', message: ''})
    setShowThankYouMessage(true)
  }


  const handleRequestCV = () => {
    setInputValues({
      ...inputValues,
      subject: "CV Request",
      message: 'I would like to see your CV, you can send it to me at the email address provided above'
    })
  }



  return (
    <div>
      <Head>
        <title>CHIAMAKA ONYEJEGBU | Portfolio</title>
        <meta name="description" content="Amaka's Online Portfolio" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className="page-container">
        {/* Navbar Start */}
        <div className="navbar-container">
          <div className="logo-text">Amaka</div>
          <div className="navbar-links-container">
            <a href='#about' className="navbar-link">About</a>
            <a href='#works' className="navbar-link">Works</a>
            <a href='#services' className="navbar-link">Services</a>
            <a href='#contact' className="navbar-link">Contact</a>
          </div>
        </div>
        {/* Navbar End, Header Start */}
        <div className="header-container">
          <div className='text-container'>
            <h3 className='subheading'>Hello! 👋 I am</h3>
            <h1 className='heading'>Chiamaka Onyejegbu</h1>
            <div className='text'>I’m a creative user experience and web designer. I love to create easy and convenient Designs, that solves Users problems.</div>
            <div className="buttons-container">
              <a href='#contact' onClick={() => handleRequestCV()}><div className="button">Request CV</div></a>
              <div className="button primary">Hire Me</div>
            </div>
          </div>
          <div className='links-container'>
            <a target="_blank" href='https://www.behance.net/amakamac'>
              <i aria-hidden="false" className="fab fa-behance-square"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/invites/contact/?i=mxh1eveyp6r2&utm_content=mqssekq">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/chiamaka-onyejegbu-08b815181'>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://dribbble.com/amakamac" >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
        {/* Header Container End */}
        {/* About Section Start */}
        <div className="about-section section" id='about'>
          <div className="image-container">
            <img src="/images/about.png" alt="Amaka's About" className='about-image' />
          </div>
          <h3 className="section-heading">ABOUT ME</h3>
          <div className="section-text">
            <p>I am Chiamaka Onyejegbu  a  user interface and user experience  Designer from Lagos , Nigeria.
              love to create easy and convenient Designs, that solves Users problems.</p>
            {/*  */}
            <p>I explore different aspects of designs and development,  making use of different tools.
              I design for web, mobile and enterprise applications. View Resume</p>
          </div>
        </div>
        {/* About Section End */}
        <div className="skills-section section" id='skills'>
          <h3 className="section-heading">MY Skills</h3>

          <div className="row-container">
            <div className='box-container'>
              <div className="box-name">UI/UX Design</div>
              <div className='box-text'>I deliver user experience through artistically created user interface design</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <div className="box-name">UX Research</div>
              <div className='box-text'>I conduct research for the target users and their requirements, to add realistic contexts and insights to design processes.</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <div className="box-name">Interaction Design</div>
              <div className='box-text'>Designing interactive products and services.</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <div className="box-name">UX Writing</div>
              <div className='box-text'>Writing is used to guide users within a product and help them interact with it, and enhancing communication between users and a digital product.</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <div className="box-name">Design systems</div>
              <div className='box-text'>I develop design system,making a unique and unified visual language that boldly represents your brand.</div>
            </div>
          </div>
        </div>
        {/* Skills Section End */}
        {/* Services Section Start */}
        <div className="skills-section section" id='services'>
          <h3 className="section-heading">MY Services</h3>

          <div className="row-container">
            <div className='box-container'>
              <img src="/images/web.png" alt="HTML" className='box-image' />
              <div className="box-name">Website  Design</div>
              <div className='box-text'>Get the best of user-centric websites across all devices</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <img src="/images/app.png" alt="HTML" className='box-image' />
              <div className="box-name">Mobile App  Design</div>
              <div className='box-text'>Get an appealing & easy flow look and feel for your mobile apps.</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <img src="/images/ux.png" alt="HTML" className='box-image' />
              <div className="box-name">UX Design</div>
              <div className='box-text'>Users learn your system easy & effectively without difficulty</div>
            </div>
            {/*  */}
            <div className='box-container'>
              <img src="/images/ui.png" alt="HTML" className='box-image' />
              <div className="box-name">UI Design</div>
              <div className='box-text'>Users learn your system easy & effectively without difficulty</div>
            </div>
          </div>
        </div>
        {/* Work Section Start */}
        <div className="skills-section section" id='works'>
          <h3 className="section-heading">My Work</h3>
          <div className="row-container">
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-furniture.png" alt="Work 1" className='work-image' />
              <div className='overlay-container'>
                <div className='overlay-text'>Furniture - Modern Furniture eCommerce Website concept.</div>
                <a href='https://www.figma.com/file/9kI06e8Bo1ORkJw53eCkDx/Furniture-Store?node-id=0%3A1' target="_blank">
                  <div className='overlay-link'>Open Figma Link <i className='fa fa-link'></i></div>
                </a>
              </div>
            </div>
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-dental.png" alt="Work 2" className='work-image' />
              <div className='overlay-container'>
                <div className='overlay-text'>Dental App - Application which user can find dentist online.</div>
                <a href='https://www.figma.com/file/HP2QOpFLStQQCAV7avsjzQ/doc?node-id=1%3A2' target="_blank">
                  <div className='overlay-link'>Open Figma Link <i className='fa fa-link'></i></div>
                </a>
              </div>
            </div>
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-location.png" alt="Work 2" className='work-image no-cover' />
              <div className='overlay-container'>
                <div className='overlay-text'>Delivery App - A Location tracker concept design</div>
                <a href='https://www.figma.com/file/jOd7x4UBYVriDy9Cjui8TK/Location-Tracker?node-id=0%3A1' target="_blank">
                  <div className='overlay-link'>Open Figma Link <i className='fa fa-link'></i></div>
                </a>
              </div>
            </div>
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-message.png" alt="Work 2" className='work-image' />
              <div className='overlay-container'>
                <div className='overlay-text'>Messaging App - Social media messaging application.</div>
                <a href='https://www.figma.com/file/9kI06e8Bo1ORkJw53eCkDx/Furniture-Store?node-id=0%3A1' target="_blank">
                  <div className='overlay-link'>Open Figma Link <i className='fa fa-link'></i></div>
                </a>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/* Work Section End */}
        {/* Contact Section Start */}
        <div className="contact-section section" id='contact'>
          <h3 className="section-heading">Contact Me</h3>
          <div className='section-subheading'>Get In Touch</div>

          <div className='contact-section-row'>
            <div className="inner-container">
              <div className='left-side'>
                {/*  */}
                <div className="contact-info-row">
                  <i className='fa fa-map-marker-alt'></i>
                  <div className="text-container">
                    <div className='info-name'>Address</div>
                    <div className="info-detail">Lagos, Nigeria</div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="contact-info-row">
                  <i className='fa fa-phone-alt'></i>
                  <div className="text-container">
                    <div className='info-name'>Phone</div>
                    <div className="info-detail">+234 811 8485 477</div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="contact-info-row">
                  <i className='fa fa-envelope'></i>
                  <div className="text-container">
                    <div className='info-name'>Email</div>
                    <div className="info-detail">onyejegbuchiamaka@gmail.com</div>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* Right side start */}
              <div className='right-side'>
                {!showThankYouMessage ? <form className='contact-form-container' id="contact-form" onSubmit={handleFormSubmit}>
                  <input
                    placeholder='Name'
                    type='text'
                    required
                    id="name-input"
                    name='name'
                    value={inputValues.name}
                    onChange={handleInputChange} />
                  <input
                    placeholder='Email'
                    type='text'
                    required
                    id="email-input"
                    name='email'
                    value={inputValues.email}
                    onChange={handleInputChange} />
                  <input
                    placeholder='Subject'
                    type='text'
                    id='subject-input'
                    name='subject'
                    value={inputValues.subject}
                    onChange={handleInputChange} />
                  <textarea
                    placeholder='Message'
                    required
                    id="message-input"
                    name="message"
                    value={inputValues.message}
                    onChange={handleInputChange} />
                  <input type="submit" value='Send' className='submit-button' onChange={handleInputChange} />
                </form> : null}
                {/*  */}
                {showThankYouMessage ? <div className='thank-you-message'>
                  <img src="/images/confetti.gif" alt="Thank You" className='thank-you-image' />
                  <div className='message-heading'>Message Sent!</div>
                  <div className='message-text'> Thank you for your message. I will get back to you as soon as possible.</div>
                  <div className='button' onClick={() => setShowThankYouMessage(false)}>Send Another Message</div>
                </div> : null}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <div className="footer-container">
          <div className='footer-logo'>Amaka</div>
          <div className='footer-links-container'>
            <a target="_blank" href='https://www.behance.net/amakamac'>
              <i aria-hidden="false" className="fab fa-behance-square"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/invites/contact/?i=mxh1eveyp6r2&utm_content=mqssekq">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/chiamaka-onyejegbu-08b815181'>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://dribbble.com/amakamac" >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
          <div className='footer-text copyright-text'>© 2022 Copyright  chiamaka onyejegbu All rights reserved.</div>
        </div>
      </main>
    </div>
  )
}
