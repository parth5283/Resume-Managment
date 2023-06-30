  import { createSlice } from "@reduxjs/toolkit"

  const initialState = {
    projects:[],
  }
  
  const projectReducer = createSlice({
    name: 'projectReducer',
    initialState,
    reducers: {
      
        saveProjectDetails(state, action) {
        state = action.payload;
      }
    }
  })
  
  export const { saveProjectDetails } = projectReducer.actions;
  export default projectReducer.reducer;