import { createSlice } from '@reduxjs/toolkit';

type dailyActivityContext = {
    dailyActivity: Array<any>,
};

const initialState: dailyActivityContext = {
    dailyActivity: [],
};

const dailyActivitySlice = createSlice({
    name: 'dailyActivity',
    initialState,
    reducers: {
        setDailyActivity: (state, { payload }: { payload: [] }) => {
            state.dailyActivity = payload;
        },
    },
});

export const { setDailyActivity } = dailyActivitySlice.actions;

export default dailyActivitySlice.reducer;