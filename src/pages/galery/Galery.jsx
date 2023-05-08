//STYLES
import styled from 'styled-components'

import { useSinglePrismicDocument} from '@prismicio/react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


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

    h1 {
        color: white;
        font-family: 'Austria';
        font-size: 4em;
        margin-bottom: 10px;
        border-bottom: 5px solid #507e08;
        padding-bottom: 3px;


    }
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

const GaleryGrid = styled.div`
    max-width: 70vw;
    max-height: max-content ;
    overflow-x:auto ;
    display: flex;
    flex-wrap: nowrap;

    ::-webkit-scrollbar {
        height: 7px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(201, 213, 183, 0.5);
        border-radius: 20px;
    }

`



function Galery(){

    const [page] = useSinglePrismicDocument('new-garden')

    return(
        <GalerySection id='galery' >




                    <h1>Galery</h1>
                    {page &&

                        <GaleryGrid id='galerygrid'>

                            <GaleryItem  src={page.data.image1.url} />
                            <GaleryItem  src={page.data.image2.url} />
                            <GaleryItem  src={page.data.image3.url} />
                            <GaleryItem  src={page.data.image4.url} />


                        </GaleryGrid>
                        
                    }


        {/*}
            <GaleryButton>More Images</GaleryButton>
        {*/}
        
        </GalerySection>
    )
}export default Galery