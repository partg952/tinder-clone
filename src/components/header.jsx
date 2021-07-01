import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
    const Nav = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
    `
    return (
        <div>
            <AccountCircleIcon/>
        </div>
    )
}
