import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const HOST = process.env.REACT_APP_BASE_URL;


const today = new Date();

const initialState = {
    halls: [],
    seats: [],
    selectedHallScheme: {},
    movies: [],
    chosenDate: `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`,
    seances: [],
};

export const getHalls = createAsyncThunk(
    "admin/getHalls",
    async(_, {getState}) => {
        const {token} = getState().auth;
        const response = await fetch(HOST+process.env.REACT_APP_BASE_HALLS, {
            headers:{"Authorization":`Bearer ${token}`},
        });
        return await response.json();
    }
);

export const createHall = createAsyncThunk(
    "admin/createHalls",
    async(name,{getState}) =>{
        const {token} = getState().auth;
        const response = await fetch(HOST + process.env.REACT_APP_BASE_HALLS,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({name}),
        });
        return response.ok;
    }
);

export const deleteHall = createAsyncThunk(
    "admin/deleteHalls",
    async(id,{getState}) =>{
        const {token} = getState().auth;
        const response = await fetch(`HOST + process.env.REACT_APP_BASE_HALLS/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`,
                },
           });
        return response.ok;
    }
);
export const getSeats = createAsyncThunk(
    "admin/getSeats",
    async (id, {getState}) => {
        const {token} = getState().auth;
        const response = await fetch(`HOST + process.env.REACT_APP_BASE_SEATS${id}`, {
            headers: {"Authorization": `Bearer ${token}`},
        });
        return await response.json();
    });

export const createSeats = createAsyncThunk(
    "admin/createSeats",
    async(_,{getState}) =>{
        const {token} = getState().auth;
        const {seats} = getState().admin;
        const response = await fetch(HOST + process.env.REACT_APP_BASE_SEATS,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({seats}),
        });
        return response.ok;
    }
);
export const updateSeats = createAsyncThunk(
    "admin/createHalls",
    async(_,{getState}) =>{
        const {token} = getState().auth;
        const {seats} = getState().admin;
        const response = await fetch(HOST + process.env.REACT_APP_BASE_SEATSUPDATE,{
            method:"PUT",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({seats}),
        });
        return response.ok;
    }
);

export const getMovies = createAsyncThunk(
    "admin/getMovies",
    async(_, {getState}) => {
        const {token} = getState().auth;
        const response = await fetch(HOST+process.env.REACT_APP_FILMS, {
            headers:{"Authorization":`Bearer ${token}`},
        });
        return await response.json();
    }
);

export const createMovie = createAsyncThunk(
    "admin/createMovie",
    async({title, description, duration, country, poster},{getState}) =>{

        let formData = new FormData()
        formData.append('title', title);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('country', country);
        formData.append('poster', poster);

        const {token} = getState().auth;
        const response = await fetch(HOST+process.env.REACT_APP_FILMS,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
             },
            body:formData,
        });
        return response.ok;
    }
);

export const updateMovie = createAsyncThunk(
    "admin/createMovie",
    async({id, title, description, duration, country, poster},{getState}) =>{

        let formData = new FormData()
        formData.append('_method', 'put');
        formData.append('title', title);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('country', country);
        if(poster){
            formData.append('poster', poster);
        }
        

        const {token} = getState().auth;
        const response = await fetch(`HOST+process.env.REACT_APP_FILMS/${id}`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
             },
            body:formData,
        });
        return response.ok;
    }
);

export const deleteMovie = createAsyncThunk(
    "admin/deleteMovie",
    async (id, {getState}) => {
        const {token} = getState().auth;
        const response = await fetch(`HOST+process.env.REACT_APP_FILMS/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        return response.ok;
    }
);

export const getSeances = createAsyncThunk(
    "admin/getSeances",
    async (_, {getState}) => {
        const {token} = getState().auth;
        const {chosenDate} = getState().admin;
        const response = await fetch(`HOST+process.env.REACT_APP_SEANCE/${chosenDate}`, {
            headers: {"Authorization": `Bearer ${token}`},
        });
        return await response.json();
    }
);


export const createSeance = createAsyncThunk(
    "admin/createSeance",
    async ({datetime, hall_id, film_id}, {getState}) => {
        const {token} = getState().auth;
        const response = await fetch(HOST+process.env.REACT_APP_SEANCE, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({datetime, hall_id, film_id}),
        });
        return response.ok;
    }
);

export const deleteSeance = createAsyncThunk(
    "admin/deleteSeance",
    async (id, {getState}) => {
        const {token} = getState().auth;
        const response = await fetch(`HOST+process.env.REACT_APP_SEANCE/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        return response.ok;
    }
);

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        craeteScheme:(state,action) => {
            action.seats = action.payload;
        },
        craeteHallScheme:(state,action) => {
            action.selectedHallScheme = action.payload;
        },
        changeHallSize:(state,action) => {
            const {id,status} = action.payload;
            const seats = state.seats.find((seat) => seat.id ===id);
            seats.status = status;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHalls.fulfilled, (state, action) => {
                state.halls = action.payload;
            })
            .addCase(getSeats.fulfilled, (state, action) => {
                state.seats = action.payload;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getSeances.fulfilled, (state, action) => {
                state.seances = action.payload;
            })
    },

});

export const {createScheme, selectHallScheme, changeHallSize, changeSeatStatus, chooseDate} = adminSlice.actions;
export default adminSlice.reducer;