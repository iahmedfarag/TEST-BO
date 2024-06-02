import { styled } from 'styled-components';

export default function ChatBox() {
    return (
        <Wrapper>ChatBox</Wrapper>
    )
}


const Wrapper = styled.section`
    flex: 1;
    background-color: ${(props) => props.theme.background};
    padding: 20px;
    color: ${(props) => props.theme.color};
    font-size: ${(props) => props.theme.textChatBoxSize};
`