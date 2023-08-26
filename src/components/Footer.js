import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Sude</h1>
          <p>Aday Bilgisayar Mühendisi</p>
        </div>
        <div>
          <a href="https://github.com/">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/home?lang=tr">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projelerim</h4>
          <a href="https://github.com/sudeozkanoglu/Otel-Otomasyonu">
            Otel Otomasyonu
          </a>
          <a href="https://github.com/sudeozkanoglu/Web-Site-Project">
            Blog Sayfası
          </a>
          <a href="https://github.com/sudeozkanoglu/Shopping-Automation">
            Alışveriş Otomasyonu
          </a>
        </div>
        <div>
          <h4>İletişim</h4>
          <a href="https://github.com/">GitHub</a>
          <a href="https://www.linkedin.com/feed/">LinkedIn</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://twitter.com/home?lang=tr">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
