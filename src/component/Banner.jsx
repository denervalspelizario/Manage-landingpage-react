import '../style/component/Banner.sass';
import ImageDados from '/image/illustration-intro.svg';
import GetStarted from './GetStarted';

const Banner = () => {
  return (
    <section>
      <article>
        <h1>Bring everyone together to build better products</h1>
        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
        <GetStarted />      
      </article>
      <aside>
        <img src={ImageDados} alt="" />
      </aside>

    </section>
  )
}

export default Banner