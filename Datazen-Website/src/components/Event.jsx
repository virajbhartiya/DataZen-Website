import React from 'react';
import '../styles/Event.css';
import EventSection from './EventSection';



function Event() {
  const items = [
    {
      title:'Title 1',
      content: "Lorem ipsum dolor sit amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, reiciendis sit voluptatum vero deleniti blanditiis quaerat, enim illum repudiandae consectetur magni voluptatibus veniam? Repudiandae necessitatibus quas, numquam nobis voluptate unde, consequatur odio aperiam aspernatur adipisci ea sit inventore. Sequi deserunt quidem dolorem dolores ipsa minus dignissimos odit, necessitatibus eveniet iure?",
      img: './assets/7_days.jpg' ,
      linkto:'https://www.figma.com/file/BuMG7YKn63oDxs7Yt2dxGe/datazen?node-id=0%3A1&mode=dev'
    },
    {
      title:'Title 2',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: './assets/7_days.jpg' 
    },
    {
      title:'Title 3',
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, saepe?",
      img: './assets/7_days.jpg' 
      
    },
  ];
  

  return (
    <>
      
      <div className='title'>
        <div>
          <h1>Events</h1>
        </div>
      </div>

      {items.map(({title,content,img,linkto},i)=>
      
      <EventSection isLeft={i%2 ? false : true} linker={linkto} title={title} content={content} imageLink={img}    />
      
      )}


      
     
    </>
  );
}

export default Event;
