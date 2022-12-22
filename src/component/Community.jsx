import { useEffect, useState, useRef } from 'react';
import GetStarted from './GetStarted';
import '../style/component/Community.sass';

const Community = () => {

  const [data, setData] = useState([]);
  const carousel = useRef(null);


  useEffect(() => {
    fetch('http://127.0.0.1:5173/static/shoes.json').then((response) => response.json()).then(setData);     
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }

  const handleRightClick = (e) => {
    e.preventDefault();
  
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if(!data || !data.length) return null;

  return (
    <div className="container">
      <div className="container__carousel">
        <div className="carousel" ref={carousel} >
          {data.map((item) => {
            const {id, name, price, oldPrice, image} = item;
            return (<div className="item" key={id} >
              <div className="item__image">
                <img src={image} alt={name} />
              </div>
              <div className="info"> 
                <span className="info__name" >{name}</span>
                <span className="info__comment" >{price}</span>
              </div>
            </div>
          );
        })}
        </div>
        <div className='buttons'>
          <button onClick={handleLeftClick} ><img  className='button__first' src="/public/static/images/scroll.png" alt="Scroll Left" /> </button>
          <button onClick={handleRightClick} ><img className='button__last'  src="/public/static/images/scroll.png" alt="Scroll Right" /></button>
        </div>
      </div>
      <GetStarted />
    </div>
  )
}

export default Community