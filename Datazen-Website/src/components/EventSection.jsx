import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/EventSection.css'


function EventSection({isLeft,title,content,linker,imageLink}) 
{
    
  return (
    <div>
         <div className={`${!isLeft? 'right' : 'left'}`}  >
            <div className='event-image'>
                <img src={imageLink} className='event-img'/>


            </div>
            
            <div className="event-content-box">
             
                <b><h3 className='event-title'>{title}</h3></b>
                <div className='event-content'>
                <p>{content}</p>
                </div>
                
                {linker && <Link to={linker}>Register</Link>}
            </div>
            </div>
        
    </div>
  )
}

export default EventSection