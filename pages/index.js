import Head from 'next/head'


export default function Home() {
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
            <a href='#projects' className="navbar-link">Projects</a>
            <a href='#projects' className="navbar-link">Skills</a>
            <a href='#projects' className="navbar-link">Services</a>
            <a href='#contact' className="navbar-link">Contact</a>
          </div>
        </div>
        {/* Navbar End, Header Start */}
        <div className="header-container">
          <div className='text-container'>
            <h3 className='subheading'>Hello! 👋 I am</h3>
            <h1 className='heading'>Chiamaka Onyejegbu</h1>
            <div className='text'>I’m a creative user experience and web designer. I love to create easy and convenient Designs, that solves Users problems.</div>
          </div>
          <div className='links-container'>
            <a target="_blank">
              <i aria-hidden="false" className="fab fa-behance-square"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank">
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
        <div className="skills-section section" id='skills'>
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
        <div className="skills-section section" id='skills'>
          <h3 className="section-heading">My Work</h3>
          <div className="row-container">
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-furniture.png" alt="Work 1" className='work-image' />
            </div>
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-dental.png" alt="Work 2" className='work-image' />
            </div>
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-location.png" alt="Work 2" className='work-image no-cover' />
            </div>
            {/*  */}
            <div className='work-image-container'>
              <img src="/images/work-message.png" alt="Work 2" className='work-image' />
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
                    <div className="info-detail">chiomaoyejegbu@gmail.com</div>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* Right side start */}
              <div className='right-side'>
                <form className='contact-form-container'>
                  <input placeholder='Name' type='text' />
                  <input placeholder='Email' type='text' />
                  <input placeholder='Subject' type='text' />
                  <textarea placeholder='Message' />
                  <input type="submit" value='Send' className='submit-button' />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <div className="footer-container">
          <div className='footer-logo'>Amaka</div>
          <div className='footer-links-container'>
            <a target="_blank">
              <i aria-hidden="false" className="fab fa-behance-square"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
          <div className='footer-text'>© 2022 Copyright  chiamaka onyejegbu All rights reserved.</div>
        </div>
      </main>
    </div>
  )
}
