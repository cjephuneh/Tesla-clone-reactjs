import './section.css'
import styled from 'styled-components' 
import { ButtonGroup } from '@material-ui/core'
const Section = () =>{
    return(
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Schedule a Test Drive</p>
            </ItemText>
            <ButtonGroup className='group'>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Order
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    
`
const RightButton = styled(LeftButton)`
`


