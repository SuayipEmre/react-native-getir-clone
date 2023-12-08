import { createSlice } from "@reduxjs/toolkit";


type stateType = {
    modalVisible : boolean
}
const initialState : stateType = {
    modalVisible : false
}

export const profile = createSlice({
    name :"profile modal",
    initialState,
    reducers : {
        _setModalVisible : (state, action) => {
          state.modalVisible = action.payload
        }
    }
})

export const{_setModalVisible} = profile.actions
export default profile.reducer