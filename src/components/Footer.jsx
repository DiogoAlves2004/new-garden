//STYLES
import styled from 'styled-components'

const Footer = styled.footer`
    width: 100vw;
    height: 50px;
    background: #639e06;
    display: flex;
    font-size: 1em;
    justify-content: center;
    align-items: center;
    color: white;

    a {
        color: white;
        transition: all ease-in-out 0.2s;
    }


    a:hover,
    a:active {
        transform: scale(1.1);
    }
`


function Home(){
return(
    <Footer>
    Design and code created by &nbsp;
    <a
        target='_blank'
        rel='noreferrer'
        href='https://diogoalves.netlify.app/'
    > D&A - Diogo Alves</a>
</Footer>

)
}export default Home