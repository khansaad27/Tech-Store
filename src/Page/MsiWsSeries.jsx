import React from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import TopBg from '../component/topbg/TopBg'
import NavMenu from '../layer/manu/NavMenu'

const MsiWsSeries = () => {
  return (
    <div>
      <Container>
        <TopBg />
        <Breadcrumb />
        <div className="App">
          <header className="p-4">
            <NavMenu />
          </header>
        </div>
      </Container>
    </div>
  )
}

export default MsiWsSeries