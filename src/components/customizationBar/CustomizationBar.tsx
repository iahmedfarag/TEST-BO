import { Wrapper } from "./CustomizationBarWrapper";
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { resetTheme, toggleCustomizationSidebar } from '@store/generalSlice';
import { BiSolidCommentEdit } from 'react-icons/bi';
import Logo from '@components/common/logo/Logo';
import Color from '@components/common/color/Color';
import UserStatus from '@components/common/user/UserStatus';
import Font from "@components/common/font/Font";
import { IoMdClose } from "react-icons/io";

export default function CustomizationBar() {
    const { backgroundDefaultColors, colorDefaultColors, btnBackgroundDefaultColors, customizationSidebar, theme: { color, background, btnBackground, textSize, textChatBoxSize } } = useAppSelector((state) => state.general)
    const dispatch = useAppDispatch()

    const customizationBarStyle = {
        style: customizationSidebar ? { left: "0" } : { left: "-250px" }
    }



    return (
        <Wrapper style={customizationBarStyle.style}>
            <Logo />
            <button className="close"><IoMdClose /></button>
            <div className="colors">
                <Color defaultArr={backgroundDefaultColors} color={background} prop='background' name='background' />
                <Color defaultArr={colorDefaultColors} color={color} prop='color' name='Text' />
                <Color defaultArr={btnBackgroundDefaultColors} color={btnBackground} prop='btnBackground' name='Button Background' />
            </div>

            <div className="size">
                <h3>Size of the text</h3>
                <Font size={textChatBoxSize} name="Chat Box" prop='textChatBoxSize' />
                <Font size={textSize} name="Other" prop='textSize' />
            </div>

            <div className="update">
                <button>Update</button>
            </div>

            <div className="reset">
                <button onClick={() => { dispatch(resetTheme()) }}>Reset</button>
            </div>

            <div className='tip'>
                <a href="https://htmlcolorcodes.com/" target='_blank'>Get your own favorite color</a>
            </div>

            <div className="user">
                <div className="control">
                    <button onClick={() => { dispatch(toggleCustomizationSidebar()) }}>Close <BiSolidCommentEdit /></button>
                </div>
                <UserStatus />
            </div>
        </Wrapper>
    )
}
