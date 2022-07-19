import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TourTypeDTO } from '../components/TypesDTO';
import { myHost, RootState } from './exploitReduxStore';

export type TourType = {
    tournee_id: number,
    nom_tournee: number,
    code_tournee: string,
    lot_id: number,
};

type TourState = {
    currentTour: TourType[]
};

const initialState: TourState = {
    currentTour: [],
};

export const fetchTour = createAsyncThunk(
    'tour/fetchTour',
    async (): Promise<TourTypeDTO[]> => {
        const response = await fetch(myHost + 'getTour');
        return response.json();
    }
);

const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        setTour: (state, action: PayloadAction<TourTypeDTO[]>) => {
            state.currentTour = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchTour.fulfilled,
            (state, action: PayloadAction<TourTypeDTO[]>) => {
                state.currentTour = action.payload;
            }
        );
    },
});

export const { setTour } = tourSlice.actions;

export const selectTour = ({tour}: RootState) : TourType[] => tour.currentTour;

export default tourSlice.reducer;