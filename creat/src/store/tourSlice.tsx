import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  TourTypeDTO } from '../components/FetchData';
import { RootState } from './exploitReduxStore';

type TourType = {
    tournee_id: number,
    nom_tournee: number,
    code_tournee: string,
    lot_id: string,
};

type TourState = {
    currentTour: TourType[]
};

const initialState: TourState = {
    currentTour: [],
};

const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        setTour: (state, action: PayloadAction<TourTypeDTO[]>) => {
            state.currentTour = action.payload;
        },
    },
});

export const { setTour } = tourSlice.actions;

export const selectTour = ({tour}: RootState) : TourType[] => tour.currentTour;

export default tourSlice.reducer;