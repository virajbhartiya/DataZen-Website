import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/MeetTheTeam.css";

/*


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{
  name: 'Rahul Hello',
  designation: 'Web Developer',
  linkedin: 'https://linkedin.com/in/rahul-dandona',
  github: 'https://github.com/rahul-dondona',
  image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',

},

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



*/

const teamMembers = [
  {
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },
  {
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },{
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },{
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },{
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },{
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },{
    name: 'Rahul Hello',
    designation: 'Web Developer',
    linkedin: 'https://linkedin.com/in/rahul-dandona',
    github: 'https://github.com/rahul-dondona',
    image: 'https://www.clipartmax.com/png/small/34-340027_user-login-man-human-body-mobile-person-comments-person-icon-png.png',
  
  },
  

];

const MeetTheTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="meet-the-team-container" id="team">
      <div className="title-team">
          <h1>Meet the Team</h1>
      </div>

      <div className="team-carousel">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt="Team Member" />
              </div>
              <h4>{member.name}</h4>
              <p className="designation">{member.designation}</p>
              <div className="team-member-socials">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetTheTeam;
