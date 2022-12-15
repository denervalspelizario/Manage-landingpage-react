import '../style/component/Header.sass';
import GetStarted from './GetStarted';
import Banner from './Banner';
import Logo from '/image/logo.svg';


const Header = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="logo manage escrito na cor azul marinho em fonte Be Vietnam Pro" />  
        <nav>
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
        <GetStarted />      
      </header>
      <Banner />
    </div>

  )
}

export default Header