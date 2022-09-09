import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/akinwumi-sehinde-ab8071138" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Sahar009" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/saharMufc" target="_blank"><FaTwitter/></a>
   
    </div>
  )
}

export default headersocials