import React from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import TopBg from '../component/topbg/TopBg'
import PTopBar from '../layer/productTopBar/PTopBar'
import Filter from '../layer/Filter/Filter'


const MsiWsSeries = () => {
  return (
    <div>
      <Container>
        <TopBg />
        <Breadcrumb />
        <PTopBar/>
        <Filter/>
      </Container>
    </div>
  )
}

export default MsiWsSeries