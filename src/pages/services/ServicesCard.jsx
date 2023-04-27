//STYLES
import styled from 'styled-components'


const Card = styled.div`
    width: 175px;
    height: 230px;
    border-radius: 25px;
    background: #f2f2f2;
    margin: 10px;

    h1 {
        color: black;
        border: none !important;
        font-size: x-large;
        height: 20px !important;
        width: 175px;
        text-align: center;
    }

    transition: all ease-in-out 0.2s;
    :hover, :active{
        transform: scale(1.1);
        box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.5);
    }

`
const Image = styled.img`
    width: 175px;
    height: 150px;
    border-radius: 25px;
    background: #c9d5b7;
    padding: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`

function ServicesCard(props){
return(
    <Card>
        <Image src={props.img} />

        <h1>{props.name}</h1>

    </Card>
)
}export default ServicesCard