//STYLES
import styled from 'styled-components'

//IMAGES
import HomeImage from '../../img/HomeImage.jpg'
import Logosvg from '../../img/Logo1.svg'

import Typewriter from 'typewriter-effect';


const HomeSection = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${HomeImage}); 
    background-size: cover;
    background-attachment: fixed;
`
const Header  = styled.header`
    overflow: hidden;
    transform: translate(0, 20px);
    height: 150px;
    display: flex;
    align-items: center;
`
const Separator1 = styled.div`
    position: absolute;
    top: 10px;
    width: 100vw;
    height: 1px;
    background: rgba(225, 225, 225, 0.5);

`
const Separator2 = styled.div`
    position: absolute;
    bottom: 10px;
    width: 100vw;
    height: 1px;
    background: rgba(225, 225, 225, 0.5);
`
const Logo  = styled.img`
    position: absolute;
    margin: 20px 0 20px 50px ;
    width: 160px;
    height: 160px;
    background-size: cover;
    //background-image: url(${Logosvg}); 
`
const Menu  = styled.ul`

    display: flex;
    position: absolute;
    right: 50px;

    & li ,
    span,
    li a{
        text-decoration: none;
        margin: 0 15px 0 15px;
        list-style: none;
        color: white;
        font-size: 1.2em;
        font-family: 'Lustria', serif;
        transition: all ease-in 0.2s;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    & li:hover,
    :active{
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transform: scale(1.05);
        font-weight: 500;
    }
`
const Title = styled.div`
    margin: auto;
    transform: translate(0, 200px);
    width: max-content;
    text-align: center;
    font-family: 'Lustria', serif;
    color: white;

    & h1{
        font-size: 6em;
    }

    & h2{
        font-size: 2em;
    }
`

const OrçamentButton = styled.button`
    margin: auto;
    display: block;
    position: relative;
    top: 250px;
    padding: 10px 20px;
    font-family: 'Austria';
    font-size: 1.5em;
    background: #f2f2f2;
    color: #7b9437;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    transition: all ease-in-out 0.2s;
    :hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
    }
`

function Home(){
return(

    <HomeSection>

        <Header>
            <Separator1 />
            <Logo src={Logosvg}>
            </Logo>

            <Menu>
                <li ><a href='#services'>Services</a> </li>
                <span>|</span>
                <li><a href='#galery'>Galery</a></li>
                <span>|</span>
                <li><a href='#contact'>Orcament/Contact</a></li>
            </Menu>
            <Separator2 />
        </Header>

        <Title>

            <h1>New Garden</h1>
            <h2>
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('Dream Garden')
                    .pauseFor(1500)
                    .deleteAll()
                    typewriter.typeString('Garden Services')
                    .start();
                    }}
                />
            </h2>
        </Title>
            
            <OrçamentButton>Contact Now</OrçamentButton>
            
    </HomeSection>

)
}export default Home