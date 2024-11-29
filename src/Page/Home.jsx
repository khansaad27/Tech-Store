import React from 'react'
import Container from '../layer/Container'
import SimpleSlider from '../layer/bannerSlider/SimpleSlider'
import ProductDetail from '../component/product/ProductDetail'
import ZipBanner from '../layer/ZipBanner/ZipBanner'
import CustomBuildsProductDetail from '../component/product/CustomBuildsProductDetail'






const Home = () => {
  return (
    <div>
      <Container>
        <SimpleSlider />
        <ProductDetail />
        <ZipBanner />
        <CustomBuildsProductDetail />
      </Container>

    </div>
  )
}

export default Home