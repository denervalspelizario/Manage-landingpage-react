import Logo from '/image/logo.svg';
import Facebook from '/image/icon-facebook.svg';
import Youtube from '/image/icon-youtube.svg';
import Twitter from '/image/icon-twitter.svg';
import Pinterest from '/image/icon-pinterest.svg';
import Instagram from '/image/icon-instagram.svg';
import '../style/component/Footer.sass';

const Footer = () => {
  return (
    <footer>
      <div className='footer__media'>
        <img src={Logo} alt="logo manage escrito na cor branco em fonte Be Vietnam Pro"/>
        <ul>
          <li><a href="#"><img src={Facebook} alt="link com logo em branco do facebook"/></a></li>
          <li><a href="#"><img src={Youtube} alt="link com logo em branco do youtube"/></a></li>
          <li><a href="#"><img src={Twitter} alt="link com logo em branco do twitter"/></a></li>
          <li><a href="#"><img src={Pinterest} alt="link com logo em branco do pinterest"/></a></li>
          <li><a href="#"><img src={Instagram} alt="link com logo em branco do instagram"/></a></li>
        </ul>
      </div>
      <div className='footer__links'>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav> 
      </div>
      <div className='footer__links'>
      <nav>
          <ul>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </nav> 
      </div>
      <div className='footer__input'>
        <form>
          <label>
            <input type="email" name='email' placeholder='Updates in your inbox'/>
          </label>
          <input type="submit" value=" Go " />
        </form>
        <p className='footer__input__cop'>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer