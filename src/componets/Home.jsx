import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section 
          title="Model S"
          description="Schedule a Test Drive"
          backgroundImg="model-s.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
      />

      <Section 
          title="Model Y"
          description="Schedule a Test Drive"
          backgroundImg="model-y.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
      />

      <Section 
          title="Model X"
          description="Schedule a Test Drive"
          backgroundImg="model-x.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
      />

      <Section 
          title="Lowest Cost Solar Panels in Kenya"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
      />

      <Section 
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
      /> 

      <Section 
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
          
      />
      
    </Container>

    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;  
`