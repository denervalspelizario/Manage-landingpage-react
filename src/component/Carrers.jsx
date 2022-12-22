import GetStarted from './GetStarted';
import '../style/component/Carrers.sass';

const Carrers = () => {
  return (
    <section className='carrers__container'>
      <div className='carrers__text'>
        <h3>Simplify how your team</h3>
        <h3>works today</h3>
      </div>
      <GetStarted />
    </section>
  )
}

export default Carrers