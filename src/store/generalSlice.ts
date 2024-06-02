import { createSlice } from "@reduxjs/toolkit";

interface IGeneralState {
    backgroundDefaultColors: string[],
    colorDefaultColors: string[],
    btnBackgroundDefaultColors: string[],
    theme: {
        background: string,
        color: string,
        btnBackground: string,
        textSize: number
        textChatBoxSize: number
    },
    sidebar: boolean,
    customizationSidebar: boolean,
}

const initialState: IGeneralState = {
    backgroundDefaultColors: ["#000", "#f2f2f2"],
    colorDefaultColors: ["#f2f2f2", "#000"],
    btnBackgroundDefaultColors: ["#000", "#f2f2f2"],
    theme: {
        background: "#eee",
        color: "#222",
        btnBackground: "#38FFC0",
        textChatBoxSize: 18,
        textSize: 16,
    },


    sidebar: true,
    customizationSidebar: false,
};

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
        },
        toggleCustomizationSidebar: (state) => {
            state.customizationSidebar = !state.customizationSidebar
        },

        updateTheme: (state, { payload }) => {
            let newTheme = { ...payload }
            state.theme = { ...state.theme, ...newTheme }
        },

        resetTheme: (state) => {
            state.theme = {
                background: "#ccc",
                color: "#111",
                btnBackground: "#eee",
                textChatBoxSize: 18,
                textSize: 16,
            }
        }
    },
    extraReducers: () => { },
});

export const { toggleSidebar, toggleCustomizationSidebar, updateTheme, resetTheme } = generalSlice.actions;
export default generalSlice.reducer;
