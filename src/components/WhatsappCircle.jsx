//STYLES
import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'


const Circle = styled.a`
    width: 100px;
    height: 100px;
    background: #ffffff;
    border-radius: 100px;
    z-index: 99999;
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

    a{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg{
        color: #639e06;
    }

    @media only screen and (max-width: 600px) {
        width: 75px;
        height: 75px;
        font-size: 3em;
    }
`

function WhatsappCircle(){

return(

    <Circle 
        target='_blank' 
        rel="noopener noreferrer" 
        href={`https://api.whatsapp.com/send?phone=447535914158&https://api.whatsapp.com/send?phone=447535914158&text=Hello%20my%20name%20is%20Diogo%2C%20I%20request%20a%20quote%20for%20Garden%20Maintenance%20on%20the%20date%20of%3A%202012%2F30%2F23`}
    >
    
    <FaWhatsapp />
    </Circle>
    
)
}export default WhatsappCircle