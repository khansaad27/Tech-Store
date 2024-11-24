import React from 'react'
import Container from '../layer/Container'
import SimpleSlider from '../layer/SimpleSlider'
import ProductDetail from '../component/ProductDetail'





const Home = () => {
  return (
    <div>
      <Container>
        <SimpleSlider />
        <ProductDetail />
      </Container>

    </div>
  )
}

export default Home