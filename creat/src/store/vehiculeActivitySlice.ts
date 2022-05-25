import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehivuleActivityTypeDTO } from '../components/TableLists';
import { RootState } from './exploitReduxStore';

type VehiculeActivityType = {
    vehicule_activite_id: number,
    vehicule_id: number,
    km_depart: number,
    km_arrive: number,
    km_jour: number
};

type vehiculeActivityContext = {
    currentVehiculeActivity: VehiculeActivityType[]
};

const initialState: vehiculeActivityContext = {
    currentVehiculeActivity: []
};

const vehiculeActivitySlice = createSlice({
    name: 'vehiculeActivity',
    initialState,
    reducers: {
        setVehiculeActivity: (state, action: PayloadAction<VehivuleActivityTypeDTO[]>) => {
            state.currentVehiculeActivity = action.payload;
        },
    },
});

export const { setVehiculeActivity } = vehiculeActivitySlice.actions;

export const selectVehiculeActivity = ({vehiculeActivity}: RootState) : VehiculeActivityType[] => vehiculeActivity.currentVehiculeActivity;

export default vehiculeActivitySlice.reducer;