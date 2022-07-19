import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DailyActivityTypeDTO } from '../components/TypesDTO';
import { myHost, RootState } from './exploitReduxStore';

type DailyActivityType = {
    activite_jour_id: number;
    vehicule_activite_id: number;
    heure_embauche: string;
    heure_debauche: string;
    duree_pause: number;
};

type DailyActivityState = {
    currentDailyActivity: DailyActivityType[];
    selectedLotCodes: string[]
};

const initialState: DailyActivityState = {
    currentDailyActivity: [],
    selectedLotCodes: []
};

export const fetchDailyActivity = createAsyncThunk(
    'dailyActivity/fetchDailyActivity',
    async (): Promise<DailyActivityTypeDTO[]> => {
        const response = await fetch(myHost + 'getDailyActivity');
        return response.json();
    }
);

export const loadLotCodes = createAsyncThunk(
    'dailyActivity/loadLotCodes',
    async (tourCode: string): Promise<string[]> => {
        const response = await fetch(myHost + 'getLotIdFromTourCode/' + tourCode);
        return response.json();
    }
);

const dailyActivitySlice = createSlice({
    name: 'dailyActivity',
    initialState,
    reducers: {
        setDailyActivity: (
            state,
            action: PayloadAction<DailyActivityTypeDTO[]>
        ) => {
            state.currentDailyActivity = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchDailyActivity.fulfilled,
            (state, action: PayloadAction<DailyActivityTypeDTO[]>) => {
                state.currentDailyActivity = action.payload;
            }
        );
        builder.addCase(
            loadLotCodes.fulfilled,
            (state, action: PayloadAction<string[]>) => {
                state.selectedLotCodes = action.payload;
            }
        );
    },
});

export const { setDailyActivity } = dailyActivitySlice.actions;

export const selectDailyActivities = ({ dailyActivity }: RootState): DailyActivityType[] => 
    dailyActivity.currentDailyActivity;

export const selectSelectedLotCodes = ({ dailyActivity }: RootState): string[] => 
    dailyActivity.selectedLotCodes;


export default dailyActivitySlice.reducer;
