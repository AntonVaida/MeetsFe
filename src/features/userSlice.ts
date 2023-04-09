import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { getAllUsers, getUserWithRandomImg} from "../api/users";

export interface UsersState {
    loading: boolean,
    loadingNewImg: boolean,
    error: string | null,
    users: User[] | null,
}

const initialState: UsersState = {
    loading: false,
    loadingNewImg: false,
    error: null,
    users: [],
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {  
    },
    extraReducers(builder) {
        builder.addCase(init.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(init.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(init.rejected, (state) => {
            state.error = 'Error Downloading';
        })
        builder.addCase(randomImgForUser.pending, (state) => {
            state.loadingNewImg = true;
        })
        builder.addCase(randomImgForUser.fulfilled, (state, action) => {
            const indexUser = state.users?.findIndex((user: User) => user.userId === action.payload.userId);
            (indexUser !== undefined) && state.users?.splice(indexUser, 1, action.payload)
            state.loadingNewImg = false;
            state.error = null;
        })
        builder.addCase(randomImgForUser.rejected, (state) => {
            state.error = 'Error Downloading New Img';
        })
    }
})

export const init = createAsyncThunk('users/fetch', () => {
    return getAllUsers();
});

export const randomImgForUser = createAsyncThunk('users/userwithImg', (userId: number) => {
    return getUserWithRandomImg(userId);
} )

export default usersSlice.reducer;