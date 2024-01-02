import React from 'react'
// import { Link } from 'react-router-dom';
import '../styles/EventSection.css'


function EventSection({ isLeft, title, content, linker, imageLink }) {
  if (linker) {

    React.useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }, []);
  }

  return (
    <div className='event-section-container'>
      <b><h3 className='event-title'>{title}</h3></b>
      <div className={`${!isLeft ? 'right' : 'left'}`}  >
        <div className='event-image'>
          <img src={imageLink} className='event-img' />


        </div>

        <div className="event-content-box">

          <div className='event-content'>
            <p>{content}</p>
          </div>
          {linker &&
            <div
              className="apply-button"
              data-hackathon-slug="datathon-3"
              data-button-theme="dark"
            ></div>
          }
          {/* {linker && <Link to={linker} className='register'>Register</Link>} */}
        </div>
      </div>

    </div>
  )
}

export default EventSection