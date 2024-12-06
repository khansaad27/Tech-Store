import React from 'react'
import Image from '../../layer/Image'
import Container from '../../layer/Container'

const TopBg = () => {
  return (
    <div>
      <Container>
        <Image
          className="bg-fixed bg-cover w-full h-auto"
          src="/assets/2pbg/bg.svg"
          alt="Background not found"
        />
      </Container>

    </div>
  )
}

export default TopBg