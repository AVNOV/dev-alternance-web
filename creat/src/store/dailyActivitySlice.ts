import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DailyActivityTypeDTO } from '../components/FetchData';
import { RootState } from './exploitReduxStore';

type DailyActivityType = {
    activite_jour_id: number,
    vehicule_activite_id: number,
    heure_embauche: string,
    heure_debauche: string,
    duree_pause: string
};

type dailyActivityState = {
    currentDailyActivity: DailyActivityType[]
};

const initialState: dailyActivityState = {
    currentDailyActivity: [],
};

const dailyActivitySlice = createSlice({
    name: 'dailyActivity',
    initialState,
    reducers: {
        setDailyActivity: (state, action: PayloadAction<DailyActivityTypeDTO[]>) => {
            state.currentDailyActivity = action.payload;
        },
    },
});

export const { setDailyActivity } = dailyActivitySlice.actions;

export const selectDailyActivities = ({dailyActivity}: RootState) : DailyActivityType[] => dailyActivity.currentDailyActivity;

export default dailyActivitySlice.reducer;