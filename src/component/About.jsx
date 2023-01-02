import AsideList from './AsideList';
import '../style/component/About.sass';

const About = () => {
  return (
    <article className='main__container'>
      <div className='sobre__container'>
        <h2>What's different about Manage</h2>
        <p>
          Manage provides all the functionality your
          team needs. Without the complexity. Our software
          is tailor-made for modern digital product teams.
        </p>
      </div>
      <aside>
        <AsideList  number='01' subtitle='Track company-wide progress' 
          text='See how your day-to-day tasks fit into the wider vision.
                Go from tracking progress at the milestone level all the
                way done to the smallest of details. Never lose sight of
                the bigger picture again.'
        />
        <AsideList  number='02' subtitle='Advanced built-in reports' 
          text='Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build
                out the reports you need to keep key stakeholders informed.'
        />
        <AsideList  number='03' subtitle='Everything you need in one place' 
          text='Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an all-in-one
                team productivity solution.'
        />    
        
      </aside>
    </article>
  )
}

export default About