import { createSlice } from '@reduxjs/toolkit';

type vehiculeActivityContext = {
    vehiculeActivity: Array<any>,
};

const initialState: vehiculeActivityContext = {
    vehiculeActivity: [],
};

const vehiculeActivitySlice = createSlice({
    name: 'vehiculeActivity',
    initialState,
    reducers: {
        setVehiculeActivity: (state, { payload }: { payload: [] }) => {
            state.vehiculeActivity = payload;
        },
    },
});

export const { setVehiculeActivity } = vehiculeActivitySlice.actions;

export default vehiculeActivitySlice.reducer;