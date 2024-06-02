import ChatBox from "@components/chatBox/ChatBox"
import CustomizationBar from "@components/customizationBar/CustomizationBar"
import Navbar from "@components/navbar/Navbar"
import Sidebar from "@components/sidebar/Sidebar"
import Ticket from "@components/ticket/Ticket"
import { useAppSelector } from "@store/hooks"
import styled, { ThemeProvider } from "styled-components"


function App() {
  const { theme: { background, color, btnBackground, textChatBoxSize, textSize } } = useAppSelector((state) => state.general);

  const DefaultTheme = {
    background: background,
    color: color,
    btnBackground: btnBackground,
    textChatBoxSize: `${textChatBoxSize}px`,
    textSize: `${textSize}px`
  }


  return (
    <ThemeProvider theme={DefaultTheme}>
      <Wrapper>
        <Sidebar />
        <CustomizationBar />
        <div className="pageContainer">
          <Navbar />
          <div className="ticket">
            <Ticket />
            <ChatBox />
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  .pageContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: calc(100% - 250px);
  }
  .ticket {
    display: flex;
    gap: 10px;
    width: 100%;
  }
`