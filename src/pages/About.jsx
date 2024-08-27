import React from 'react'
import HAbout from '../components/HAbout'
import AboutLanding from '../components/About/AboutLanding'
import AboutContent from '../components/About/AboutContent'

export default function About() {
  const home=false
  return (
    <div>
      <AboutLanding/>
      <AboutContent/>
      <HAbout home={home}/>
    </div>
  )
}
