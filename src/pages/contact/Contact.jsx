//STYLES
import styled from 'styled-components'

import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import Typewriter from 'typewriter-effect'

const ContactSection = styled.section`
    width: 100%;
    height: 100vh;
    background: #639e06;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    color: white;
    background-attachment: fixed;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50px;
    width: 25vw;

    input, select, button{
        padding: 10px 20px 10px 10px;
        margin: 10px 0;
        border: none;
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
    }

    button{
        border: none;
        border-radius: 25px;
        width: 50%;
        position: relative;
        left: 25%;
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
position: absolute;
right: 50px;
width: 50vw;
height: 75%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


h1{
    font-size: 1.5em;
    margin-top: 20px;
}
h2{
    font-size: 0.9em;
}

div{
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
}

`


function Contact(){


    function sendMail(e){

        e.preventDefault()
        alert('Email Send!')

        fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('a4d3478800de117b8e080619facc50e4:a94c9d368a20471385c2a0c78e6bb3cd')
        },
        body: JSON.stringify({
            'Messages': [
            {
                'From': {
                'Email': 'alvessilva524@gmail.com',
                'Name': 'Me'
                },
                'To': [
                {
                    'Email': 'alvessilva524@gmail.com',
                    'Name': 'You'
                }
                ],
                'Subject': 'My first Mailjet Email!',
                'TextPart': 'Greetings from Mailjet!',
                'HTMLPart': '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!'
            }
            ]
        })
        });

    }



    return(
        

    <ContactSection id='contact'>

        <Form> 
            <h1>Contact Now!</h1>
            <input type='text' placeholder='Your name?'/>
            <input type='email' placeholder='Your e-mail?'/>
            <select>
                <option selected hidden>Your request service</option>
                <option>Garden Maintenance</option>
                <option>Pressure Washing Services In London</option>
                <option>Hedge Trimming</option>
                <option>Lawn Care Services</option>
                <option>Fencing & Decking</option>
                <option>Turfing Services</option>
                <option>Gutter Cleaning Services</option>
                <option>Gutter Cleaning Services</option>
            </select>
            <button onClick={sendMail}>Submit</button>

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
            <FaWhatsapp></FaWhatsapp>
            <HiOutlineMail></HiOutlineMail>
        </div>

        </SocialContainer>
        

    </ContactSection>

)
}export default Contact