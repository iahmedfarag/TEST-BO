import { BiSolidCommentEdit } from "react-icons/bi";
import { toggleCustomizationSidebar } from "@store/generalSlice";
import { useAppDispatch } from "@store/hooks";
import { Wrapper } from "./SidebarWrapper";
import Logo from "@components/common/logo/Logo";
import UserStatus from "@components/common/user/UserStatus";

export default function Sidebar() {
    const dispatch = useAppDispatch()



    return (
        <Wrapper>
            <Logo />

            <ul>
                <li>Tickets</li>
                <li>Customers</li>
                <li>Activites</li>
                <li>Agents</li>
            </ul>

            <div className="user">
                <div className="control">
                    <button onClick={() => { dispatch(toggleCustomizationSidebar()) }}>Customize <BiSolidCommentEdit /></button>
                </div>
                <UserStatus />
            </div>
        </Wrapper>
    )
}

