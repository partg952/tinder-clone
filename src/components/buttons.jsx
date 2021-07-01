import React from 'react'
import styled from 'styled-components';

export default function Buttons() {
    const ButtonsDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        height: 60px;
        width: 60px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5), 10px 10px 15px rgba(0,0,0,0.5), -1px -1px 30px rgba(0,0,0,0.2);
        border-radius:50px;
        background-color: transparent;
        border: 0;
        img{
            height: 40px;
        }
    }
    `
    return (
        <ButtonsDiv>
            <button>
                <img src="https://i2.wp.com/fastandclean.org/wp-content/uploads/2017/03/X-Tinder-icon-meaning.png?w=50&ssl=1" alt="" />
            </button>
            <button>
                <img src="https://i0.wp.com/fastandclean.org/wp-content/uploads/2017/03/Bolt-Boost-Tinder-icon-meaning.png?resize=40%2C60" alt="" />
            </button>
            <button>
                <img src="https://i0.wp.com/fastandclean.org/wp-content/uploads/2017/03/Like-Heart-Tinder-icon-meaning.png?resize=54%2C50" alt="" />
            </button>
            <button>
                <img src="https://i0.wp.com/fastandclean.org/wp-content/uploads/2017/03/Tinder-yellow-heart-icon.png?resize=150%2C150&ssl=1" alt="" />
            </button>
            <button>
                <img src="https://i2.wp.com/fastandclean.org/wp-content/uploads/2017/03/Super-like-Tinder-icon-meaning.png?resize=50%2C58" alt="" />
            </button>
        </ButtonsDiv>
    )
}
