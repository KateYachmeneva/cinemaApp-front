/* eslint-disable no-undef */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const HOST = process.env.REACT_APP_BASE_URL;
const initialState = {
    session: {},
    seats: [],
    ticket: {},
};
export const getSeance = createAsyncThunk("seance/getSeats", async (id) => {
    const response = await fetch(HOST+process.env.REACT_APP_CLIENTSEATS +'/'+ id);
    return await response.json();
});
export const buyTicket = createAsyncThunk(
    "seance/buyTicket",
    async (_, {getState}) => {
        const {ticket} = getState().seance;
        const response = await fetch(HOST+process.env.REACT_APP_CLIENTTICKET, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"session_id": ticket.seanceId, seats: ticket.seats}),
        });
        return await response.json();
    }
);
const seanceSlice = createSlice({
    name: "seance",
    initialState,
    reducers: {
        resetSeance: () => {
            return initialState
        },
        createTicket: (state, action) => {
            const {seanceId, seats, cost} = action.payload;
            state.ticket = {seanceId, seats, cost};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSeance.fulfilled, (state, action) => {
                const {session, seats} = action.payload;
                state.session = session;
                state.seats = seats;
            })
            .addCase(buyTicket.fulfilled, (state, action) => {
                const {id} = action.payload;
                state.ticket.id = id;
            });
    },
});

export const {resetSeance, createTicket} = seanceSlice.actions;
export default seanceSlice.reducer;