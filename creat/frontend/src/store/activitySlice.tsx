import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityTypeDTO } from '../components/TypesDTO';
import { RootState } from './exploitReduxStore';

type ActivityType = {
    date_activite: string,
    debut: string,
    fin: string,
    prevue: number,
    distri: number,
    avise: number,
    poste: number,
    relaie: number,
    refuse: number,
    autre: number,
    esd: number,
    reguliere: number,
    km: number,
    tournee_id: number
};

type ActivityState = {
    currentActvity: ActivityType[]
};

const initialState: ActivityState = {
    currentActvity: [],
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setActivity: (state, action: PayloadAction<ActivityTypeDTO[]>) => {
            state.currentActvity = action.payload;
        },
    },
});

export const { setActivity } = activitySlice.actions;

export const selectActivity = ({activity}: RootState) : ActivityType[] => activity.currentActvity;

export default activitySlice.reducer;