import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/MeetTheTeam.css";
import teamData from "../Data/teamData.json"; 

const MeetTheTeam = () => 
{
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => 
  {
    setTeamMembers(teamData);
  }, 
  []
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    cssEase: "linear",
    lazyLoad: "progressive",
    edgeFriction: 5,
    waitForAnimate:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

    prevArrow: (
      <button className="slick-prev" aria-label="Previous" type="button">
      </button>
    ),
    nextArrow: (
      <button className="slick-next" aria-label="Next" type="button">
      </button>
    ),
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
