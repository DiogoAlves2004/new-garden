//STYLES
import styled from 'styled-components'


const Card = styled.div`

    background: rgba(242, 242, 242, 0.75);
    color: #507e08;
    font-size: 0.3em;
    max-width: 300px;
    height: 150px;
    overflow-y: auto;
    border-radius: 35px;
    display: flex;
    align-items: center;
    & div{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    & span {
        padding: 10px;
        font-style: italic;
    }

    @media only screen and (max-width: 600px) {
        width: 90vw !important;
    }

    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(201, 213, 183, 0.5);
        border-radius: 20px;
    }
`

const Perfil = styled.img`
    width: 100px;
    padding: 10px;
    
`

function ComentCard(props){
    return(
        <Card>
            <Perfil src={props.perfilImage}/>

            <div>
                <p>
                    {props.text} 
                </p>
                <span>{props.author}</span>
            </div>
        </Card>
    )
}export default ComentCard