import * as React from "react"
import HeroSection from "../components/HeroSection"
import GetInTouch from "../components/GetInTouch"
import Footer from "../components/Footer"


const IndexPage = () => {
  return (
    <main>
     <section>
      <HeroSection/>
     </section>
     {/* <GetInTouch/> */}
     <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
