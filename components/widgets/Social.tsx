'use client'
import React from 'react'
import SocialIcon from '../ui/SocialIcon'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaThreads, FaUpwork } from 'react-icons/fa6'

const Social = () => {
  return (
    <div className='pt-10 md:px-20 px-4 w-full flex flex-col'>
        <SocialIcon
          icon={(<FaLinkedin color='#0a66c2' size={80}/>)}
          title='LinkedIn'
          href='https://www.linkedin.com/in/noman-haider-119240294/'
         />
        <SocialIcon
          icon={(<FaThreads color='#fff' size={80}/>)}
          title='Threads'
          href='https://www.threads.net/'
         />
         <SocialIcon
          icon={(<FaUpwork color='#108a00' size={80}/>)}
          title='Upwork'
          href='https://www.upwork.com/freelancers/~01f5e655a4979b3856'
         />
         <SocialIcon
          icon={(<FaTwitter color='#0a66c2' size={80}/>)}
          title='Twitter'
          href='https://twitter.com'
         />
         <SocialIcon
          icon={(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
            </svg>)}
          title='Email'
          href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCHVHvnVwpJZWTVKntgtNVdxPjSmlVdWdXrqWVdHrMrWxBswzhvQsGkCKxDXGRtTFGlGSV'
         />
    </div>
  )
}

export default Social