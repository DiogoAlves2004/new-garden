//STYLES
import styled from 'styled-components'

const Item = styled.img`
    width: 250px;
    height: 400px;
    background: white;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);
    margin: 20px;
    transition: ease-in-out 0.18s;
    :hover, :active{
        transform: scale(1.1);
    }

`

function GaleryItem(props){


return(

    <Item src={props.src}>

    </Item>

)
}export default GaleryItem