import { updateTheme } from "@store/generalSlice"
import { useAppDispatch } from "@store/hooks"
import { TwitterPicker } from "react-color"
import styled from "styled-components"

type ColorType = {
    defaultArr: string[],
    color: string,
    prop: string,
    name: string,
}


export default function Color({ defaultArr, color, prop, name }: ColorType) {
    const dispatch = useAppDispatch()

    return (
        <Wrapper >
            <h3>{name}</h3>
            <TwitterPicker
                width={"234px"}
                colors={defaultArr}
                color={color}
                onChangeComplete={(color: any) => {
                    dispatch(updateTheme({ [prop]: color.hex }))
                }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
        h3 {
            text-transform: capitalize;
        }
    display: flex;
    flex-direction: column;
    gap: 10px;
`