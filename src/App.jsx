import React from 'react'
import Certificate from "./Component/Certificate"
import Button from "./Component/Button"
import FSDCard from './Component/FsdCard'
import Footer from './Component/Footer'
import TestimonialCards from './Component/TestimonialCard'
import CourseCard from './Component/Certificate'
import ProgrammingCardsSection from './Component/ProgramminCourse'
import Text from './Component/Text'
import Initial from './Component/Initial'



function App() {
 

  return (
    <>
      <div >
      <Initial/>
      
      <Text text="Internship bases/ Certificate program"/>
      <ProgrammingCardsSection/>
      {/* <Certificate/> */}
      {/* <Button active={false} text={"Download Brochure"} /> */}
      <Text text="Placement graduated course"/>
      <FSDCard/>
      <Text text="Our student, making us proud everyday"/>
      <TestimonialCards/>
      
      <Footer/>
      </div>
    </>
  )
}

export default App
