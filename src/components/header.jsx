import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TinderLogo from '../assets/tinder-icon.svg';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
export default function Header() {
    const Nav = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 40px;
    .icons{
        color: black;
        font-size:50px;
    }
    img{
        height: 50px;
    }
    
    `
    return (
        <div>
            <Nav>
            <AccountCircleIcon className='icons'/>
            <img src={TinderLogo} alt="" />
            <QuestionAnswerIcon className='icons'/>
            </Nav>
        </div>
    )
}
