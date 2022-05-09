import { createSlice } from '@reduxjs/toolkit';

type vehiculeActivityContext = {
    vehicule: Array<any>,
};

const initialState: vehiculeActivityContext = {
    vehicule: [],
};

const vehiculeSlice = createSlice({
    name: 'vehiculeActivity',
    initialState,
    reducers: {
        setVehiculeActivity: (state, { payload }: { payload: [] }) => {
            state.vehicule = payload;
        },
    },
});

export const { setVehiculeActivity } = vehiculeSlice.actions;

export default vehiculeSlice.reducer;