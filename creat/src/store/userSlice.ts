import { createSlice } from "@reduxjs/toolkit";

type userContext = {
    user: string;
};

const initialState: userContext = {
    user: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: { payload: string }) => {
            state.user = payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;