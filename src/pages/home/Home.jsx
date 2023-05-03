//STYLES
import styled from 'styled-components'

//IMAGES
import HomeImage from '../../img/HomeImage.jpg'
import Logosvg from '../../img/Logo1.svg'

//LIBS
import Typewriter from 'typewriter-effect';
import Hamburger from 'hamburger-react'


//HOOKS
import { useState } from 'react';

const HomeSection = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${HomeImage});
    background-size: cover;
    background-attachment: fixed;
`
const Header  = styled.header`
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

    @media only screen and (max-width: 900px) {
        left: -30px;
    }
`
const MenuUl  = styled.ul`
    display: block;
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

    & li ,
    span,
    li a{
        @media only screen and (max-width: 890px) {
            display: none !important;
        }
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
        //font-size: 6em;
        font-size: clamp(1em, 5em, 10em); 
    }

    & h2{
        font-size: 2em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 0.7em;
        transform: translate(0, 250px);
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

    border: none;
    border-radius: 25px;
    cursor: pointer;

    transition: all ease-in-out 0.2s;
    :hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
    }

    a{
        text-decoration: none;
        color: #7b9437;
    }

    @media only screen and (max-width: 600px) {
        transform: translate(0, 20px);
    }
`
const HambuguerContainer = styled.div`
    display: none;

    position: absolute;
    z-index: 9999;
    top: 50px;
    right: 30px;
    @media only screen and (max-width: 900px) {
        display: block !important;
    }

`
const SecondaryMenu = styled.ul`

    position: absolute;
    top: 150px;
    left: 0;
    z-index: 999999;
    width: 100vw;
    height: max-content;
    background: #FFF;
    padding: 5px;
    display: block !important;
    li, li a{
        margin: 5px;
        font-size: 1.5em;
        list-style: none;
        text-decoration: none;
        color: white;
        color: #639e06;
    }

    @media only screen and (min-width: 900px) {
        display: none !important;
    }

`

function Home(){

    const [isOpen, setOpen] = useState(false)

return(

    <HomeSection>

        <Header>
            <Separator1 />
            <Logo src={Logosvg}>
            </Logo>

            <MenuUl>
                <li ><a href='#services'>Services</a> </li>
                <span>|</span>
                <li><a href='#galery'>Galery</a></li>
                <span>|</span>
                <li><a href='#contact'>Orcament/Contact</a></li>
            </MenuUl>

            <HambuguerContainer>
                <Hamburger
                    toggled={isOpen} toggle={setOpen} 
                    color="#FFF"
                    easing="ease-in-out"
                    rounded={true}
                    size={50}
                />
            </HambuguerContainer>


            {isOpen &&
                <SecondaryMenu>
                    <li ><a href='#services'>Services</a> </li>

                    <li><a href='#galery'>Galery</a></li>

                    <li><a href='#contact'>Orcament/Contact</a></li>
                </SecondaryMenu>
            }


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
            
            <OrçamentButton><a href='#contact'>Contact Now</a></OrçamentButton>
            
    </HomeSection>

)
}export default Home