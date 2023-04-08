import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";

export interface selectedUsersState {
    selectedUser: User | null,
}

const initialState: selectedUsersState = {
    selectedUser: null,
}

export const selectedUser = createSlice({
    name: "selectUser",
    initialState,
    reducers: {  
    selectUser: (state, action) => {
        state.selectedUser = action.payload;
        },
    },
})
export const { selectUser } = selectedUser.actions;

export default selectedUser.reducer;