import styled from "styled-components"

export const Wrapper = styled.aside`
    overflow: hidden;//
    width: 250px;
    padding: 20px 10px;
    background-color: ${(props) => props.theme.background};
    font-size: ${(props) => props.theme.textSize};
    color: ${(props) => props.theme.color};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    white-space: nowrap; // wrap



    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
            font-weight: bold;
            cursor: pointer;
            &:first-child {
                background-color: ${(props) => props.theme.color};
                color: ${(props) => props.theme.background};
            }
            &:hover {
                background-color: ${(props) => props.theme.color};
                color: ${(props) => props.theme.background};
            }
            transition: var(--main-trans);
            padding: 10px;
        }
    }

    .user {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .control {
            svg {
                color: var(--main-color);
            }
            button {
                display: flex;
                align-items: center;
                gap:5px;
                &:hover {
                    background-color: ${(props) => props.theme.color};
                    color: ${(props) => props.theme.background};
                }
                transition: var(--main-trans);
                width: 100%;
                font-weight: bolder;
                font-size: 16px;
                color: ${(props) => props.theme.color};
                padding: 10px;
            }
        }


    }

`