import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TarificationTypeDTO } from '../components/FetchData';
import { RootState } from './exploitReduxStore';

type TarificationType = {
    tarif_id: string,
    debut: string,
    fin: string,
    forfait: string,
    prevue: number,
    distri: number,
    avise: number,
    poste: number,
    relaie: number,
    refuse: number,
    autre: number,
    esd: number,
    reguliere: number,
    km: number
};

type TarificationState = {
    currentTarification: TarificationType[]
};

const initialState: TarificationState = {
    currentTarification: [],
};

const tarifSlice = createSlice({
    name: 'tarification',
    initialState,
    reducers: {
        setTarification: (state, action: PayloadAction<TarificationTypeDTO[]>) => {
            state.currentTarification = action.payload;
        },
    },
});

export const { setTarification } = tarifSlice.actions;

export const selectTarification = ({tarification}: RootState) : TarificationType[] => tarification.currentTarification;

export default tarifSlice.reducer;