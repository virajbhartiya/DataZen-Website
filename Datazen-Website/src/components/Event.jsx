import React, { useEffect, useState , useRef} from 'react';
import '../styles/Event.css';
import EventSection from './EventSection';
import eventData from '../Data/eventData.json';

function Event() {
  const [events, setEvents] = useState([]);
  const EventRef=useRef(null);

  useEffect(() => 
  {
    setEvents(eventData);
  }, []);

  return (
    <>
      <div className='whole-event-container' id='event' ref={EventRef}>
        <div className='title'>
          <div>
            <h1>Events</h1>
          </div>
        </div>

        {events.map(({ title, content, img, linkto }, i) => 
        (
          
          <EventSection
            isLeft={i % 2 ? false : true}
            linker={linkto}
            title={title}
            content={content}
            imageLink={img}
            key={i}
          />
        ))}
      </div>
    </>
  );
}

export default Event;
