import { updateTheme } from "@store/generalSlice"
import { useAppDispatch } from "@store/hooks"
import styled from "styled-components"
type FontType = {
    size: number, name: string, prop: string
}
export default function Font({ size, name, prop }: FontType) {
    const dispatch = useAppDispatch()
    return (
        <Wrapper>
            <p>{name}</p>
            <input type="number" defaultValue={size} max={40} onChange={(e) => { dispatch(updateTheme({ [prop]: e.target.value })) }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    >p {
        text-transform: capitalize;
    }
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            input {
                width: 40px;
                height: 30px;
                border: 1px solid #ccc;
                outline: none;
                text-align: center;
                padding: 10px;
            }
            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }

            /* Firefox */
            input[type=number] {
            -moz-appearance: textfield;
            }

`