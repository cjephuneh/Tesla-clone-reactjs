import './section.css'
import styled from 'styled-components' 
import { ButtonGroup } from '@material-ui/core'
const Section = ({title, description, backgroundImg, leftBtnText, rightBtnText}) =>{
    return(
        <Wrap bgImage={backgroundImg} className="bgImage">
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
            <Buttons>
                <ButtonGroup className='group'>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Buttons>
            <DownArrow src="/images/down-arrow.svg"/>
            
        </Wrap>
    )
}


export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`} 
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animatedDown infinite 1.5s;


`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 29px;
    
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity 0.6s;
    color: black;
`


const Buttons = styled.div`
`

