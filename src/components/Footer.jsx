import { Link } from 'react-router-dom';
import '../styling/footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>SP</h2>
          <p>You can, if you think you can.</p>
        </div>

        {/* RIGHT */}
        <div className="footer-socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Shanmugam Poojan S — Built with love</p>
      </div>

    </footer>
  );
}

export default Footer;