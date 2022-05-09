import { createSlice } from '@reduxjs/toolkit';

type vehiculeContext = {
    vehicule: Array<any>,
};

const initialState: vehiculeContext = {
    vehicule: [],
};

const vehiculeSlice = createSlice({
    name: 'vehicule',
    initialState,
    reducers: {
        setVehicule: (state, { payload }: { payload: [] }) => {
            state.vehicule = payload;
        },
    },
});

export const { setVehicule } = vehiculeSlice.actions;

export default vehiculeSlice.reducer;