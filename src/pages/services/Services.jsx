//STYLES
import styled from 'styled-components'
import ComentCard from './ComentCard'

import {useSinglePrismicDocument } from '@prismicio/react'
import ServicesCard from './ServicesCard'

const ServiceSection = styled.section`
    width: 100%;
    height: 100vh;
    background: #639e06;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    color: white;
    background-attachment: fixed;


    @media only screen and (max-width: 1250px) {
        height: 110vh;
    }

    
`

const ComentContainer = styled.div`
    position: absolute;
    right: 20px;
    max-width: 650px;
    max-height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap !important;
    flex-direction: row !important;
    gap: 20px;
    justify-content: center;


    @media only screen and (max-width: 1250px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }

    ::-webkit-scrollbar {
        width: 7px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
             /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(201, 213, 183, 0.5);
        border-radius: 20px;
    }
`

const ServicesContainer = styled.div`
    position: absolute;
    left: 50px;
    width: 50vw;
    height: 85vh;


`
const OrçamentButton = styled.button`

    padding: 10px 20px;
    font-family: 'Austria';
    font-size: 0.5em;
    background: #f2f2f2;
    color: #7b9437;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin-bottom: 20px;

    transition: all ease-in-out 0.2s;
    :hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
    }
`


const Ul = styled.ul`
    list-style: none;

    li{
        font-size: 0.5em;
        margin: 5px;
    }
`


function Services(){

    const [page, { state }] = useSinglePrismicDocument('new-garden')


return(

    <ServiceSection id='services'>

        <ServicesContainer>

            <h1>Our Services</h1>
            <OrçamentButton>Contact Now</OrçamentButton>

            <Ul>
                <li>Garden Maintenance</li>
                <li>Pressure Washing Services In London</li>
                <li>Hedge Trimming</li>
                <li>Lawn Care Services</li>
                <li>Fencing & Decking</li>
                <li>Turfing Services</li>
                <li>Gutter Cleaning Services</li>
                <li>Gutter Cleaning Services</li>
            </Ul>

        </ServicesContainer>

        {page &&
            <ComentContainer>
                <ComentCard text={page.data.comentario1[0].text} author={page.data.autor1[0].text} />
                <ComentCard text={page.data.comentario2[0].text} author={page.data.autor2[0].text} />
                <ComentCard text={page.data.comentario3[0].text} author={page.data.autor3[0].text}  />
                <ComentCard text={page.data.comentario4[0].text} author={page.data.autor4[0].text}  />
            </ComentContainer>
        }
    </ServiceSection>

)
}export default Services