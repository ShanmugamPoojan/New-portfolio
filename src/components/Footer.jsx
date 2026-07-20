import { Link } from 'react-router-dom';
import '../styling/footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <b>{`</>`}</b> Made with Love by Shanmugam Poojan S</p>
        <p>You can, if you think you can!</p>
      </div>

    </footer>
  );
}

export default Footer;