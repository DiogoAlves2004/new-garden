//STYLES
import styled from 'styled-components'

import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'

const ContactSection = styled.section`
    width: 100%;
    height: 100vh;
    background: #639e06;

    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 4em;
    color: white;
    background-attachment: fixed;

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: max-content;
    }


`

const AlertResp = styled.h2`
    font-size: 0.5em;
    transform: translate(0, 20px);
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

    input, select, button{
        padding: 10px 20px 10px 10px;
        margin: 10px 0;
        border: none;
        width: 400px;
        
        @media only screen and (max-width: 600px) {
            width: 75vw;
        }

    }
    input::placeholder, option::placeholder, button::placeholder{
        padding: 10px 20px 10px 10px;
        margin: 10px 0;
        color: black
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
    a{
        color: white;
    }

    margin-top: 20px;
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


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState('')
    const [date, setDate] = useState('')


    return(
        

    <ContactSection id='contact'>

        <Form action="https://formsubmit.co/newgardenuk2015@gmail.com" method="POST"> 
            <h1>Contact Now!</h1>
            <input type='text' name="name" required placeholder='Your name?' onChange={(e)=> setName(e.target.value) }/>
            <input type='email' name="e-mail" required placeholder='Your e-mail?' onChange={(e)=> setEmail(e.target.value)}/>
            <select name="service" required onChange={(e)=> setService(e.target.value)}>
                <option defaultValue={true} hidden>Your request service</option>
                <option value='Garden Maintenance' >Garden Maintenance</option>
                <option value='Pressure Washing Services In London'>Pressure Washing Services In London</option>
                <option value='Hedge Trimming'>Hedge Trimming</option>
                <option value='Lawn Care Services'>Lawn Care Services</option>
                <option value='Fencing & Decking'>Fencing & Decking</option>
                <option value='Turfing Services'>Turfing Services</option>
                <option value='Gutter Cleaning Services'>Gutter Cleaning Services</option>
            </select>

            <input type='date' name="data" required placeholder='Your e-mail?' onChange={(e)=> setDate(e.target.value)}/>

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
                    href={`mailto:newgardenuk2015@gmail.com?subject=Budget%20request&body=Hello my name is ${name}, I request a quote for ${service} on the date of: ${date}`}
                >
                <HiOutlineMail /></a>

                <a 
                    href='https://www.instagram.com/greengardenlondon/'                     
                    target='_blank' 
                    rel="noopener noreferrer" ><FaInstagram /></a>
            </SocialIcons>
            <h6>newgardenuk2015@gmail.com</h6>
            <h6>+44 7595 914158</h6>
        </div>

        </SocialContainer>
        
        
    </ContactSection>

)
}export default Contact