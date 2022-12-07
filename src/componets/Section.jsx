import './section.css'
import styled from 'styled-components' 
const Section = () =>{
    return(
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Schedule a Test Drive</p>
            </ItemText>
        </Wrap>
    )
}


export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-positon: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');  
`

const ItemText = styled.div`
    align-items: center;
    
`

   
