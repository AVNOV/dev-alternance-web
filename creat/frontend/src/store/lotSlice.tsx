import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LotTypeDTO } from '../components/TypesDTO';
import { myHost, RootState } from './exploitReduxStore';

type LotType = {
    lot_id: number,
    nom_lot: string,
    code_client: string,
    code_interne: string,
    debut: string,
    fin: string,
    tarif_id: number
};

type LotState = {
    currentLot: LotType[]
};

const initialState: LotState = {
    currentLot: [],
};

export const fetchLots = createAsyncThunk(
    'lot/fetchLots',
    async (): Promise<LotTypeDTO[]> => {
        const response = await fetch(myHost + 'getLots');
        return response.json();
    }
);

const LotSlice = createSlice({
    name: 'lot',
    initialState,
    reducers: {
        setLot: (state, action: PayloadAction<LotTypeDTO[]>) => {
            state.currentLot = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchLots.fulfilled,
            (state, action: PayloadAction<LotTypeDTO[]>) => {
                state.currentLot = action.payload;
            }
        );
    },
});

export const { setLot } = LotSlice.actions;

export const selectLot = ({lot}: RootState) : LotType[] => 
    lot.currentLot;

export default LotSlice.reducer;