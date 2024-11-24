import React from 'react'
import Container from '../layer/Container'
import SimpleSlider from '../layer/SimpleSlider'
import ProductDetails from '../component/Productdetails'



const Home = () => {
  return (
    <div>
      <Container>
       <SimpleSlider/> 
       <ProductDetails/>   
      </Container>
  
    </div>
  )
}

export default Home