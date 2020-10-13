import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContent text-light">
        <p>Created by Elizabeth Latimer.</p>
        <p>Are you looking to hire a hard-working, passionate Jr. Dev? Please reach out!</p>
        <div className="FooterLinks">
          <a href="https://elizabethlatimer.dev">website</a> |{' '}
          <a href="https://github.com/elizabethlatimer">github</a> |{' '}
          <a href="https://www.linkedin.com/in/elizabeth-latimer/">linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;