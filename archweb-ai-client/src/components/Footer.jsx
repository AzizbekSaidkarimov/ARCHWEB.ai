import React from 'react';

const Footer = () => {

  return (
    <section id="features" className="bg-white">
      <div className="card">
  <h2 className="footer_h2">Scroll Now<br/>Thank Yourself Later</h2>
  {/* <button><a href="#footer">Scroll</a></button> */}
</div>
<footer id="footer">
  <div className="footer_col footer_col1">
    <h3 className="footer_h3">CoolSite</h3>
    <p>Made with by Jux</p>
    <div className="social">
      <a href="/" target="_blank" className="link footer_a"><img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" /></a>
      <a href="/" target="_blank" className="link footer_a"><img src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
      <a href="/" target="_blank" className="link footer_a"><img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" /></a>
    </div>
    {/* <p style="color: #818181; font-size: smaller">2024 © All Rights Reserved</p> */}
  </div>
  <div className="footer_col footer_col2">
    <p className="footer_p">About</p>
    <p className="footer_p">Our mission</p>
    <p className="footer_p">Privacy Policy</p>
    <p className="footer_p">Terms of service</p>
  </div>
  <div className="footer_col footer_col3">
    <p className="footer_p">Services</p>
    <p className="footer_p">Products</p>
    <p className="footer_p">Join our team</p>
    <p className="footer_p">Partner with us</p>
  </div>
</footer>
    </section>
  );
};

export default Footer;