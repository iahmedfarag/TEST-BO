import styled from "styled-components"

export default function UserStatus() {
    return (
        <Wrapper>
            <p>ahmed.farag@tabby.ai</p>
            <button><span></span>Online</button>
        </Wrapper>
    )
}


const Wrapper = styled.div`

            display: flex;
            flex-direction: column;
            gap: 5px;
            button {
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${(props) => props.theme.color};
            span {
                width: 10px;
                height: 10px;
                background-color: #2a912a;
                border-radius: 50%;
            }
        }
        
`