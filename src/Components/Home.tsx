import { AnimatedBackground } from "animated-backgrounds"
import Hero from "./Hero"
import Product from "./Product"
import Boxes from './Boxes'
import SwiperComponent from "./SwiperComponent"
import Guarantee from "./Guarantee"



function Home() {
  return (
    <>
  <AnimatedBackground  animationName="geometricShapes"/>
    <Hero/>
    <Guarantee/>
    <Boxes/>
    <h1 className="text-center font-bold text-4xl text-amber-900 mt-15">All Categories</h1>
    <SwiperComponent/>
    <Product/>
    </>
  )
}

export default Home