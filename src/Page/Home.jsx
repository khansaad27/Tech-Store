import React from 'react'
import Container from '../layer/Container'
import SimpleSlider from '../layer/bannerSlider/SimpleSlider'
import ProductDetail from '../component/ProductDetail'
import ZipBanner from '../layer/ZipBanner/ZipBanner'
import CustomeBuilds from '../component/Custome Builds/CustomeBuilds'





const Home = () => {
  return (
    <div>
      <Container>
        <SimpleSlider />
        <ProductDetail />
        <ZipBanner />
        <CustomeBuilds/>
      </Container>

    </div>
  )
}

export default Home