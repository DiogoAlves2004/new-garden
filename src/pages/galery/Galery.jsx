//STYLES
import styled from 'styled-components'
import styles from  './Galery.module.css'


import { useSinglePrismicDocument} from '@prismicio/react'
import { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import ReactSimplyCarousel from 'react-simply-carousel';

//IMAGES
import GaleryItem from './GaleryItem'

const GalerySection = styled.section`
    width: 100%;
    height: 100vh;
    background: url('https://cdn.pixabay.com/photo/2018/02/15/14/37/paper-3155438_960_720.jpg');
    background-size: cover;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1 {
        color: white;
        font-family: 'Austria';
        font-size: 4em;
        transform: translate(0, 40px);
        border-bottom: 5px solid #507e08;
        padding-bottom: 3px;
    }

    div {
        transform: translate(0, 25px);
    }

`
const GaleryGrid = styled.div`
    transform: translate(0, 100px);
    display: grid;
    gap: 50px;
    grid-auto-flow: column;
`

const GaleryButton = styled.button`

    margin: auto;
    display: block;

    position: relative;
    top: 40px;
    
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
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
    }
`



function Galery(){

    const [page] = useSinglePrismicDocument('new-garden')

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    
    console.log(page)


    return(
        <GalerySection id='galery'>
            <h1>Galery</h1>




                <div>
                    {page &&

                        //<GaleryGrid>

                        <ReactSimplyCarousel
                            activeSlideIndex={activeSlideIndex}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={1}
                            itemsToScroll={1}
                            forwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                                marginLeft: 20,
                                marginRight: 20
                            },
                            children: <span>{`>`}</span>,
                            }}
                            backwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <span>{`<`}</span>,
                            }}
                            responsiveProps={[
                            {
                                itemsToShow: 2,
                                itemsToScroll: 1,
                                minWidth: 768,
                            },
                            ]}
                            speed={400}
                            easing="linear"
                            centerMode={true}

                        >

                            <div style={{ width: 400, height: 600, }}>
                                <GaleryItem  src={page.data.image1.url} />
                            </div>

                            <div style={{ width: 400, height: 600, }}>
                            <GaleryItem src={page.data.image2.url} />
                            </div>

                            <div style={{ width: 400, height: 600, }}>
                                <GaleryItem src={page.data.image3.url} />
                            </div>




                        </ReactSimplyCarousel>


                        //</GaleryGrid>
                    }

                </div>

            <GaleryButton>More Images</GaleryButton>
        </GalerySection>
    )
}export default Galery