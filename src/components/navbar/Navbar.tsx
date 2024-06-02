import styled from "styled-components"

export default function Navbar() {
    return (
        <Wrapper>
            <button className="tkt">TKT 1</button>
            <button className="tkt">TKT 2</button>
            <button className="tkt">TKT 3</button>
            <button className="tkt">TKT 4</button>
        </Wrapper>
    )
}


const Wrapper = styled.nav`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    display: flex;
    align-items: center;
    height: 40px;
    
    justify-content: space-between;
    gap: 5px;
    background-color: #fff;
    > button {
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        transition: var(--main-trans);
        color: ${(props) => props.theme.color};
        background-color: ${(props) => props.theme.background};
        font-size: ${(props) => props.theme.textSize};
        &:hover {
            color: var(--main-color);
        }
        &:first-child {
            color: var(--main-color);
            font-weight: bold;
        }
    }
`