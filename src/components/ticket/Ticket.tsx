import styled from "styled-components"

export default function Ticket() {
    return (
        <Wrapper>
            <div className="info">
                <h3>Customer Info</h3>
            </div>
            <div className="topics">
                <h3>Topics</h3>
            </div>
            <div className="notes">
                <h3>Notes</h3>
            </div>
            <div className="otherTkts">
                <h3>Other Tkts</h3>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    flex: 1;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    padding: 20px;
    font-size: ${(props) => props.theme.textSize};
    height: calc(100vh - 50px); // 10px (gap)

    display: flex;
    flex-direction: column;
    > div {
        min-height: 150px;
    }


`