import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehiculeTypeDTO } from '../components/FetchData';
import { RootState } from './exploitReduxStore';

type VehiculeType = {
    vehicule_id: number,
    immatriculation: string,
    modele: string,
    marque: string
};

type VehiculeState = {
    currentVehicules: VehiculeType[]
};

const initialState: VehiculeState = {
    currentVehicules: [],
};

const vehiculeSlice = createSlice({
    name: 'vehicule',
    initialState,
    reducers: {
        setVehicule: (state, action: PayloadAction<VehiculeTypeDTO[]>) => {
            state.currentVehicules = action.payload;
        },
    },
});

export const { setVehicule } = vehiculeSlice.actions;

export const selectVehicules = ({vehicule}: RootState) : VehiculeType[] => vehicule.currentVehicules;

export default vehiculeSlice.reducer;