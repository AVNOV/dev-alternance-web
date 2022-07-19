import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehiculeTypeDTO } from '../components/TypesDTO';
import { myHost, RootState } from './exploitReduxStore';

export type VehiculeType = {
    vehicule_id: number;
    immatriculation: string;
    modele: string;
    marque: string;
};

type VehiculeState = {
    currentVehicules: VehiculeType[];
};

const initialState: VehiculeState = {
    currentVehicules: [],
};

export const fetchVehicules = createAsyncThunk(
    'vehicules/fetchVehicules',
    async (): Promise<VehiculeTypeDTO[]> => {
        const response = await fetch(myHost + 'getVehicules');
        return response.json();
    }
);

const vehiculeSlice = createSlice({
    name: 'vehicule',
    initialState,
    reducers: {
        setVehicule: (state, action: PayloadAction<VehiculeTypeDTO[]>) => {
            state.currentVehicules = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchVehicules.fulfilled,
            (state, action: PayloadAction<VehiculeTypeDTO[]>) => {
                state.currentVehicules = action.payload;
            }
        );
    },
});

export const { setVehicule } = vehiculeSlice.actions;

export const selectVehicules = ({ vehicule }: RootState): VehiculeType[] =>
    vehicule.currentVehicules;

export default vehiculeSlice.reducer;
