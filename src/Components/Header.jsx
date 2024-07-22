import "./Header.css";

const Header  =()=>{
    return (
        <>
<header id="site_header">
<div className="sec1-container">
<div className="static-nav">
<div className="Sec1-contact">
  <i className="fa-solid fa-phone">+91-721-7667-056</i>
  <i className="fa-solid fa-envelope">admin@thelearningscience.com</i>
  <div className="social">
    <i className="fa-brands fa-facebook-f"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-linkedin-in"></i>
    <i className="fa-brands fa-youtube"></i>
    <i className="fa-brands fa-twitter"></i>
  </div>
</div>
<div className="Sec1-header">
  <div className="logo">
    <img
      src="https://play-lh.googleusercontent.com/Mb0hTPOXe4Wawdr-sRHrc-kqxlwkw1MMw6HD9COZVWyW5WQB-26gG5n5sYyyU83ZE1rh=w240-h480-rw"
      alt="logo"
    />
    <p>
      The Learning Science
      <br />
      (An Alfabeto Group Venture)
    </p>
  </div>
  <div className="nav1">
    <ul>
      <li>
        <a href="/">
          <b>Home</b>
        </a>
      </li>
      <li>
        <a href="/">
          <b>Courses</b>
        </a>
      </li>
      <li>
        <a href="/">
          <b>Blog</b>
        </a>
      </li>
      <li>
        <a href="/">
          <b>Contact Us</b>
        </a>
      </li>
    </ul>
  </div>
</div>
</div>
</div>
</header>
</>
)
}

export default Header;
