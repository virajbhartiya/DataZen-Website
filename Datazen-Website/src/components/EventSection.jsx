import React from 'react'
import {Link} from 'react-router-dom';

function EventSection({isLeft,title,content,linker,imageLink}) 
{
    
  return (
    <div>
         <div className={`${!isLeft? 'right' : 'left'}`}  >
            <div className='event-image'>
                <img src={imageLink} className='event-img'/>


            </div>
            
            <div className="event-content">
                <div>{title}</div>
                <p>{content}</p>
                {linker && <Link to={linker}>Register</Link>}
            </div>
            </div>
        
    </div>
  )
}

export default EventSection