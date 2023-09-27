import React from 'react';
import '../styles/Event.css';
import EventSection from './EventSection';



/*


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      title:'TITLE',
      content: `CONTENT.`,
      img: 'Picture image link' ,
      linkto:"BUTTON LINK IF REQUIRED OR DELETE THIS LINE"
    },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/


function Event() {
  const items = [
    {
      title:'7 Days',
      content: "The 7 Days of Data Science Challenge is a week-long immersive online event taking place from August 16th to 22nd, 2023. It aims to provide participants with a comprehensive introduction to various aspects of Data Science.",
      img: './assets/7_days.jpg' ,
      linkto:'https://www.figma.com/file/BuMG7YKn63oDxs7Yt2dxGe/datazen?node-id=0%3A1&mode=dev'
    },
    {
      title:'FY MEETUP',
      content: `The "FY Meetup" that took place on August 6th, 2023, was an online event organized by Team DataZen, the Official Data Science Council of SVU. The event aimed to provide a platform for data enthusiasts to come together and engage in knowledge exchange, interactive learning, and community building.`,
      img: './assets/7_days.jpg' 
    },
    {
      title:'GETTING STARTED WITH ML RESEARCH',
      content: `Getting Started With Machine Learning Research" held on March 27th, 2023, aimed to introduce participants to the fundamentals of machine learning research. The event covered topics such as the importance of research in machine learning, essential elements of a strong research paper, strategies for publishing research findings, and securing research internships.`,
      img: './assets/7_days.jpg' 
      
    },
    

    
    {
      title:'UNION OF STREAMS',
      content:`The event "Union of Streams"  aimed to bridge the gap between data science and non-tech students by showcasing the application of data science in various domains. Over three days, participants were offered project walkthroughs demonstrating data science's relevance in diverse fields, from sports analysis like predicting football match outcomes to practical applications in customer data utilization and restaurant business analysis. `,
      img: './assets/7_days.jpg' ,
    },

    {
      title:'STORY TELLING THROUGH DATA',
      content: `The "Storytelling through Data" event was an upcoming offline event that aimed to provide participants with an enlightening two-day experience, showcasing the application of data science across domains from science to humanities. The event encouraged participants to register for an opportunity to learn various data science concepts, gain practical skills for real-world application, understand how data can solve business problems, and enhance their ability to interpret and analyze data effectively. Notably, the event also offered a chance for the best performers to secure an internship opportunity with a guaranteed interview with a recruiter and a minimal stipend.`,
      img: './assets/7_days.jpg' ,
    },

    {
      title:'ASK THE EXPERTS',
      content: `The event "Ask the Experts" aimed to bridge the gap between data science, creativity, and industry by bringing together industry experts with diverse experiences in solving problems using data. Scheduled for July 4th, the event focused on engaging participants in discussions related to data science and its applications. The main goal was to provide insights into real-world problem-solving scenarios, connecting theoretical knowledge with practical industry experiences. Attendees were invited to submit questions for the industry experts, fostering an interactive and informative session.`,
      img: './assets/7_days.jpg' ,
    },





  ];
  

  return (
    <>
      <div className='whole-event-container'>
      <div className='title'>
        <div>
          <h1>Events</h1>
        </div>
      </div>

      {items.map(({title,content,img,linkto},i)=>
      
      <EventSection isLeft={i%2 ? false : true} linker={linkto} title={title} content={content} imageLink={img} key={i}   />
      
      )}
      </div>


      
     
    </>
  );
}

export default Event;
