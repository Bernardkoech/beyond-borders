import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="/home">About Us</a>
          <a href="/profile">Contact</a>
          <a href="/home">Privacy Policy</a>
          <a href="/home">Terms of Service</a>
        </div>
        <div className="footer__socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07c0-.69-.06-1.37-.16-2.05H12v3.9h5.1c-.22 1.35-1.17 2.48-2.55 2.48-1.53 0-2.77-1.24-2.77-2.77v-1.6h-1.6v3.1h3.35c2.45-2.26 3.96-5.63 3.96-9.28z"/><path d="M0 12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0 0 5.37 0 12zm0 0"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.69.88-.52 1.56-1.35 1.88-2.34-.82.49-1.73.85-2.7 1.05a4.556 4.556 0 0 0-7.75 4.15c-3.78-.19-7.13-1.99-9.37-4.73-.39.67-.61 1.44-.61 2.27 0 1.57.8 2.96 2.01 3.78-.74-.02-1.43-.23-2.03-.57v.06c0 2.18 1.55 4 3.6 4.42-.38.1-.78.16-1.18.16-.29 0-.57-.03-.85-.08.57 1.76 2.23 3.05 4.2 3.09a9.17 9.17 0 0 1-5.69 1.97c-.37 0-.73-.02-1.09-.06 2.02 1.29 4.42 2.04 7.01 2.04 8.42 0 13.02-7.05 13.02-13.18 0-.2-.01-.39-.02-.58.9-.65 1.68-1.46 2.31-2.38z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.31 0 3.71.01 5.02.07 1.27.06 2.47.52 3.41 1.36.94.94 1.3 2.14 1.36 3.41.06 1.31.07 1.71.07 5.02s-.01 3.71-.07 5.02c-.06 1.27-.52 2.47-1.36 3.41-.94.94-2.14 1.3-3.41 1.36-1.31.06-1.71.07-5.02.07s-3.71-.01-5.02-.07c-1.27-.06-2.47-.52-3.41-1.36-.94-.94-1.3-2.14-1.36-3.41C2.16 15.88 2.15 15.48 2.15 12s.01-3.71.07-5.02c.06-1.27.52-2.47 1.36-3.41.94-.94 2.14-1.3 3.41-1.36 1.31-.06 1.71-.07 5.02-.07zm0-2.16c-3.34 0-3.75.01-5.07.07-1.42.06-2.76.52-3.8 1.38-1.03 1.03-1.39 2.37-1.45 3.8-.06 1.32-.07 1.74-.07 5.07s.01 3.75.07 5.07c.06 1.42.42 2.76 1.45 3.8 1.03 1.03 2.37 1.39 3.8 1.45 1.32.06 1.74.07 5.07.07s3.75-.01 5.07-.07c1.42-.06 2.76-.42 3.8-1.45 1.03-1.03 1.39-2.37 1.45-3.8.06-1.32.07-1.74.07-5.07s-.01-3.75-.07-5.07c-.06-1.42-.42-2.76-1.45-3.8-1.03-1.03-2.37-1.39-3.8-1.45-1.32-.06-1.74-.07-5.07-.07zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.94 0-3.5-1.56-3.5-3.5s1.56-3.5 3.5-3.5 3.5 1.56 3.5 3.5-1.56 3.5-3.5 3.5zm4.5-8c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2z"/></svg>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Bl. BEYOND BORDERS INC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
