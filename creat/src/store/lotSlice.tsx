import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LotTypeDTO } from '../components/FetchData';
import { RootState } from './exploitReduxStore';

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

const LotSlice = createSlice({
    name: 'lot',
    initialState,
    reducers: {
        setLot: (state, action: PayloadAction<LotTypeDTO[]>) => {
            state.currentLot = action.payload;
        },
    },
});

export const { setLot } = LotSlice.actions;

export const selectLot = ({lot}: RootState) : LotType[] => lot.currentLot;

export default LotSlice.reducer;