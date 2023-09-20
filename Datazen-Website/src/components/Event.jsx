import React from 'react';
import './Event.css';
import Photo from '../imgs/7_days.jpg'

function Event() {
  const items = [
    {
      id: 1,
      content: "some content",
      img: {Photo} 
    },
    {
      id: 2,
      content: "some content",
      img: "/img_url" // Update with the correct image path
    },
    {
      id: 3,
      content: "some content",
      img: "/img_url" // Update with the correct image path
    },
  ];
  

  return (
    <>
      <div className='title'>
        <div>
          <h1>Events</h1>
        </div>
      </div>

      <img src="./imgs/" alt="" srcset="" />
      <div className='contents'>
      <div >
        {items.map((item, i)=>(
          <div key={item.id} className={`row ${i%2 ? 'right' : 'left'}`}  >
            <div className='event-image'>
                <img src={Photo} className='event-img'/>

            </div>
            <div className="event-content">
                <p>{item.content}</p>
            </div>
            </div>
        ))}

      
        </div>
      </div>
    </>
  );
}

export default Event;
