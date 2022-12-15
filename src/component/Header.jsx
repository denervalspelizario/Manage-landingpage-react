import '../style/component/Header.sass';
import GetStarted from './GetStarted';
import Logo from '/image/logo.svg';


const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo manage escrito na cor azul marinho em fonte Be Vietnam Pro" />  
      <nav>
        <ul>
          <li>
            <a href="#">Preços</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Carreiras</a>
          </li>
          <li>
            <a href="#">Comunidade</a>
          </li>
        </ul>
      </nav> 
      <GetStarted />      
    </header>

  )
}

export default Header