import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const HOST = process.env.REACT_APP_BASE_URL;
//api/token/create


const initialState = {
    token: "",
    status: "idle",
};
export const fetchToken = createAsyncThunk(
    "auth/fetchToken",
    async ({email,password}) => {
        const response = await fetch(HOST + process.env.REACT_APP_AUTH, {
        method: "POST",
        mode: 'no-cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password}),
        });
  
      if (response.status !== 200) {
        throw response.statusText;
      }
      console.log(response.json());
      return await response.json();
     
    } 
);
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        // eslint-disable-next-line no-unused-vars
        logout: (state) => initialState,
        resetAuthStatus: (state) => {
            state.status = "idle";
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchToken.rejected,(state) => {
                state.status="error";
            })
            .addCase(fetchToken.fulfilled,(state,action)=>{
                state.token=action.payload.token;
                state.status="success";
            })
    },
});
export const {logout, resetAuthStatus} = authSlice.actions;
export default authSlice.reducer;