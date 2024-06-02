import styled from 'styled-components'
import logo from "@assets/logo.png"

export default function Logo() {
    return (
        <Wrapper>
            <img src={logo} alt="logo" draggable={false} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
        position: relative;
        img {
            width: 80%;
        }
        .controller {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 5px;
            &:hover {
                color: var(--main-color);
            }
            transition: var(--main-trans);            
        }
    
`