// import React from 'react'
// import {Button} from  './Button'
// import './Footer.css';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='footer-container'>
//      <section className='footer-subscription'>
//      <p className='footer-subscription-heading'>
//          Join the Adventure newsletter to receive our best vacation deals
         
//          </p>
//          <p className='footer-subscription-text'>
//             You can unsubscribe at any time.
//              </p>
//              <div className='input-areas'>
//                <form >
//                 <input type='email' name='email' placeholder='Your Email' 
//                 className='footer-input'/>
//                  <Button buttonstyle='btn-outline'>Subscribe</Button>
//                 </form> 
//                 </div>    
//      </section>
//      <div className='footer-links'>
//         <div className='footer-link-wrapper'>
//         <div class='footer-link-items'>
//             <h2>About Us</h2>
//             <Link to='/sign-up'>How it works</Link>
//             <Link to='/'>Testimonials</Link>
//             <Link to='/'>Careers</Link>
//             <Link to='/'>Investors</Link>
//             <Link to='/'>Terms of Service</Link>
//           </div>
//           <div class='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Destinations</Link>
//             <Link to='/'>Sponsorships</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Ambassadors</Link>
//             <Link to='/'>Agency</Link>
//             <Link to='/'>Influencer</Link>
//           </div>
//           <div class='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>Youtube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//          </div>
//         </div>  
    
//      <section className='social-media'>
//         <div className='social-media-wrap'>
//             <div className='footer-logo'>
//                 <Link to='/' className='social-logo'>
//                     TRAVEL <i className='fab fa-typo3'></i>
//                 </Link>
//              <small className='website-rights'>TRAVEL 2022</small>
//              <div className='social-icons'>
//                 <Link className='social-icon-link.facebook'
//                 to='/'
//                 target='_blank'
//                 aria-label='facebook'> 
//                     <i className='fab fa-facebook-f'></i>
//                 </Link>
//                 <Link className='social-icon-link.instagram'
//                 to='/'
//                 target='_blank' 
//                 aria-label='instagram'> 
//                     <i className='fab fa-instagram'></i>
//                 </Link>
//                 <Link className='social-icon-link.twitter'
//                 to='/'
//                 target='_blank' 
//                 aria-label='twitter'> 
//                     <i className='fab fa-twitter'></i>
//                 </Link>
//                 <Link className='social-icon-link.youtube'
//                 to='/'
//                 target='_blank' 
//                 aria-label='youtube'> 
//                     <i className='fab fa-youtube'></i>
//                 </Link>
//              </div>
//             </div>
//         </div>
//      </section>
//      </div>

     

//   )
// }

// export default Footer
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRAVEL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL ?? 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;