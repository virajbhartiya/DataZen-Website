import React from 'react'
import '../styles/Hero.css'; 
import DataZen_Logo from '../imgs/DataZen_Logo.png';
import Layer from '../imgs/mobile_design_layer.svg';

function Hero() 
{
  return (
    <>
      <div className='container'>
        
       <div>
      <img src={DataZen_Logo} alt="" srcset="" className='Datazen_logo'/>
      </div> 
        
        <div className='layer-1'>
        <svg width="723" height="542" viewBox="0 0 803 602" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-13 0L803 602H-13V0Z" fill="url(#paint0_linear_356_54)"/>
        <path d="M-69 268.764V134L715 602H-69V268.764Z" fill="url(#paint1_linear_356_54)"/>
        <path d="M-117 279L617.801 602H-117V279Z" fill="#A50C22"/>
        <path d="M-117 407L499 602H-117V407Z" fill="url(#paint2_linear_356_54)"/>
        <defs>
        <linearGradient id="paint0_linear_356_54" x1="-293.864" y1="-47.8622" x2="748.686" y2="532.992" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3E0000"/>
        <stop offset="1" stop-color="#C5331E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_356_54" x1="323" y1="134" x2="323" y2="602" gradientUnits="userSpaceOnUse">
        <stop stop-color="#511616" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#AB011A"/>
        </linearGradient>
        <linearGradient id="paint2_linear_356_54" x1="191" y1="407" x2="191" y2="602" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E74A34"/>
        <stop offset="1" stop-color="#A60F24"/>
        </linearGradient>
        </defs>
        </svg>
        </div>

        <div className='layer-2'>
        <svg width="1296" height="306" viewBox="0 0 1440 376" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L1440 376H0V0Z" fill="url(#paint0_linear_48_16)"/>
        <defs>
        <linearGradient id="paint0_linear_48_16" x1="720" y1="0" x2="720" y2="376" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FA0606"/>
        <stop offset="1" stop-color="#5B0000"/>
        </linearGradient>
        </defs>
        </svg>

      </div>


     
      <div className='layer-3'>
            <svg width="734" height="323" viewBox="0 0 734 323" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_22_34)">
            <path d="M734.801 0L-6.10352e-05 323H734.801V0Z" fill="#8A0000"/>
            </g>
            <g filter="url(#filter1_i_22_34)">
            <path d="M734.801 128L118.801 323H734.801V128Z" fill="url(#paint0_linear_22_34)"/>
            </g>
            <defs>
            <filter id="filter0_i_22_34" x="0" y="0" width="734.801" height="327" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_22_34"/>
            </filter>
            <filter id="filter1_i_22_34" x="118.801" y="128" width="616" height="199" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_22_34"/>
            </filter>
            <linearGradient id="paint0_linear_22_34" x1="426.801" y1="128" x2="426.801" y2="323" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CC0000"/>
            <stop offset="1" stop-color="#8A0000"/>
            </linearGradient>
            </defs>
            </svg>

      

      </div>
       


    


      </div>
    </>
  )
  
}

export default Hero


