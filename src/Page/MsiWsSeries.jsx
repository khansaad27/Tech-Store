import React from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import TopBg from '../component/topbg/TopBg'
import PTopBar from '../layer/productTopBar/PTopBar'


const MsiWsSeries = () => {
  return (
    <div>
      <Container>
        <TopBg />
        <Breadcrumb />
        <PTopBar/>
      </Container>
    </div>
  )
}

export default MsiWsSeries