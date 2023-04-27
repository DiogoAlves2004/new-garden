//STYLES
import styled from 'styled-components'


const Card = styled.div`

    background: rgba(242, 242, 242, 0.75);
    color: #507e08;
    font-size: 0.3em;
    max-width: 300px;

    border-radius: 35px;
    padding: 30px;

    & span {
        font-style: italic;
    }
    margin-left: 20px;
`

function ComentCard(props){
    return(
        <Card>
            <p>
                {props.text} 
            </p>
            <span>{props.author}</span>
        </Card>
    )
}export default ComentCard