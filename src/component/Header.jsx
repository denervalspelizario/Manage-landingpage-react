import '../style/component/Header.sass';
import GetStarted from './GetStarted';
import Banner from './Banner';
import Logo from '/image/logo.svg';
import ImageBack from '../../public/image/bg-tablet-pattern.svg';
import ImageDados from '/image/illustration-intro.svg';


const Header = (props) => {
  
  return (
    <div className='container__header'>
      <header>
        <figure>
          <img  className='header__logo' src={Logo} alt="logo manage escrito na cor azul marinho em fonte Be Vietnam Pro" />  
        </figure>
        <nav className='header__menu--desktop'>
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav> 
        <nav className="container__menu--mobile">
          <button id="hamburger" className={props.openMode ? 'bottom__open': 'bottom__close'}  onClick={props.alterMenu}>
            <i className="menuIcon material-icons " >menu</i>
            <i className="closeIcon material-icons">close</i>
          </button> 
          <menu id="menu__responsive--links" className={props.openMode ? 'menu__open': 'menu__close'}>
            <ul>
              <li><a className="menuLogo" href="#"><img  className="header--logo--menu" src={Logo} alt="Logo loopStudio" title="loopStudio"/></a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul> 
          </menu>
        </nav>
        <GetStarted />      
      </header>
      <div className='header__container__back' >
        <img className='header__image--back' src={ImageBack}/>
      </div>
      <Banner/>
    </div>
    

  )
}

export default Header