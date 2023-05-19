//STYLES
import styled from 'styled-components'

import Typewriter from 'typewriter-effect'


const ContactSection = styled.section`
    width: 100%;
    height: 100vh;
    background: #639e06;

    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 4em;
    color: white;

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: max-content;
    }


`

const AlertResp = styled.h2`
    font-size: 0.5em;
    width: 25vw;
    text-align: center;

    @media only screen and (max-width: 600px) {
        width: 75vw;
        font-size: 0.3em;
    }

` 

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25vw;

    @media only screen and (max-width: 600px) {
        width: 75vw;
        align-items: center;
        margin: 50px 0 ;
    }

    input, select, button, textarea{
        padding: 10px 20px 10px 10px;
        margin: 10px 0;
        border: none;
        width: 400px;
        
        @media only screen and (max-width: 600px) {
            width: 75vw;
        }

        ::placeholder{
            padding: 10px 20px 10px 10px;
        margin: 10px 0;
        color: black
        }
    }

    h1 {
        width: 25vw;
        font-size: 1em;
        margin-bottom: 10px;
        @media only screen and (max-width: 600px) {
            width: max-content;
            font-size: 0.8em;
        }
    }

    button{
        border: none;
        border-radius: 25px;
        width: 50%;
        font-size: 0.3em;
        cursor: pointer;
        transition: all ease-in-out 0.2s;
    }

    button:hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
    }

`

const SocialContainer = styled.div`

width: 50vw;
height: 75%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

    @media only screen and (max-width: 600px) {
        padding: 20px 0;
    
    }

h1{
    font-size: 1.5em;
    margin-top: 20px;
    
    @media only screen and (max-width: 600px) {
        font-size: 0.4em;
        margin: 20px 0;
    }
}
h2{
    font-size: 0.9em;

    @media only screen and (max-width: 600px) {
        text-align: center;
    }
}

div{

    display: flex;
    flex-direction: column;
    align-items: center;


    h6{
        font-size: 0.4em;
    }

    svg{
        margin: 0 20px;
        font-size: 1.2em;
        cursor: pointer;
        transition: all ease-in-out 0.2s;
        :hover, :active{
            transform: scale(1.1);
        }
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    h6{
        @media only screen and (max-width: 600px) {
            font-size: 0.2em;
        }
    }

}

`


const SocialIcons = styled.div`
    display: flex;
    flex-direction: row !important;
    flex-wrap: nowrap;
`



function Contact(){

    return(
        
    <ContactSection id='contact'>

        <Form action="https://formsubmit.co/newgardenuk2015@gmail.com" method="POST"> 
            <h1>Contact Now!</h1>
            <input type='text' name="name" required placeholder='Your name?'/>
            <input type='email' name="e-mail" required placeholder='Your e-mail?' />
            <select name="service" required>
                <option defaultValue={true} hidden>Your request service</option>
                <option value='Garden Maintenance' >Garden Maintenance</option>
                <option value='Pressure Washing Services In London'>Pressure Washing Services In London</option>
                <option value='Hedge Trimming'>Hedge Trimming</option>
                <option value='Lawn Care Services'>Lawn Care Services</option>
                <option value='Fencing & Decking'>Fencing & Decking</option>
                <option value='Turfing Services'>Turfing Services</option>
                <option value='Gutter Cleaning Services'>Gutter Cleaning Services</option>
            </select>

            <input type='date' name="data" required placeholder='Your e-mail?'/>

            <textarea type='' name="detalhes" required placeholder='Details:'/>

            <button type='submit'>Submit</button>
            <AlertResp>We will contact you within 24 hours!</AlertResp>
        </Form>

        <SocialContainer>

        <h2>
        <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString("We don't do Gardening")
                .pauseFor(1500)
                .deleteAll()
                typewriter.typeString('"We do perfect Gardening"')
                .start();
                }}
            />
        </h2>
        <h1>New Garden</h1>


        <div>

            <SocialIcons>
                <a 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    href={`mailto:newgardenuk2015@gmail.com?subject=Budget%20request&body=Hello`}
                >

                    <svg fill='#FFF' width='85px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                        <g>
                            <g>
                                <path d="M472.178,73.28H39.822C17.856,73.28,0,91.159,0,113.103v285.795c0,21.958,17.864,39.822,39.822,39.822h432.356
                                    c21.984,0,39.822-17.927,39.822-39.822V113.103C512,91.189,494.176,73.28,472.178,73.28z M440.364,107.414L256,235.232
                                    L71.638,107.414H440.364z M39.822,404.585c-3.137,0-5.689-2.552-5.689-5.689v-275.95c11.454,7.941,396.844,275.132,406.23,281.639
                                    H39.822z M477.867,389.051L285.954,255.999l191.912-133.052V389.051z"/>
                            </g>
                        </g>

                    </svg>
                
                </a>

                <a 
                    href='https://www.instagram.com/greengardenlondon/'                     
                    target='_blank' 
                    rel="noopener noreferrer" >

                <svg width='75px' viewBox="0 0 20 20" version="1.1">
                    
                    <title>instagram [#167]</title>
                    <desc>Created with Sketch.</desc>
                    <defs>

                </defs>
                    <g id="Page-1" stroke="none" >
                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#FFF">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                </path>
                            </g>
                        </g>
                    </g>
                </svg>


                </a>

            </SocialIcons>
            <h6>newgardenuk2015@gmail.com</h6>
            <h6>+44 7595 914158</h6>
        </div>

        </SocialContainer>
        


    </ContactSection>

)
}export default Contact