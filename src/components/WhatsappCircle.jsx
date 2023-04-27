//STYLES
import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'


const Circle = styled.div`
    width: 100px;
    height: 100px;
    background: #ffffff;
    border-radius: 100px;

    position: fixed;
    bottom: 50px;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    cursor: pointer;

    transition: all ease-in-out 0.2s;

    :hover, :active{
        transform: scale(1.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 10, 0.5);
    }

    svg{
        color: #639e06;
    }
`

function WhatsappCircle(){

return(

    <Circle>
        <FaWhatsapp />
    </Circle>
    
)
}export default WhatsappCircle