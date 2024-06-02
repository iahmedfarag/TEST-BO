import styled from "styled-components";

export const Wrapper = styled.aside`
    width: 250px;
    padding: 20px 10px;
    background-color: #eee;
    font-size: 16px;
    color: #000;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    transition: var(--main-trans);
    display: flex;
    flex-direction: column;
    white-space: nowrap; // wrap
    overflow-y: scroll; //
    overflow-x: hidden;
    .close {
        position: relative;
        z-index: 5;
        button {
            position: absolute;
            top: 20px;
            right: -5px;
            color: var(--main-color);
            font-size: 24px;
        }
    }
    .colors {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px 0;
    }
    .size {
        display: flex;
        flex-direction: column;
        gap: 5px;
        h3 {
            margin-bottom: 5px;
        }
        margin-bottom: 10px;
    }

    .reset, .update {
        margin: 5px 0;
        button {
            width: 100%;
            padding: 10px;
            background-color: #fff;
            font-weight: bold;
            &:hover {
                background-color: var(--main-color);
            }
            transition: var(--main-trans);

            &:active{
                color: var(--main-color);
            }
        }
    }
    .tip {
        margin: 10px 0;
    }
    .user {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .control {
            button {
                display: flex;
                align-items: center;
                gap:5px;
                background-color: var(--main-color-lighter);
                transition: var(--main-trans);
                &:hover {
                    background-color: var(--main-color);
                }
                width: 100%;
                font-weight: bold;
                padding: 10px;
            }
        }
    }
`