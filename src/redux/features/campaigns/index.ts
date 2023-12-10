import { createSlice } from "@reduxjs/toolkit";
import campaign from "../../../../assets/campaigns";
import announcements from "../../../../assets/announcements";

type stateTypes = {
    activeValue : 'Kampanyalar' | 'Duyurular',
    campaignContent : {
        id : number,
        img : string,
        title : string,
        subtitle : string
    }[]
    camapaignModalVisible: boolean
}

const initialState  : stateTypes = {
    activeValue:'Kampanyalar',
    campaignContent : campaign,
    camapaignModalVisible : false
}

export const campaignSlice = createSlice({
    name :'campaign',
    initialState,
    reducers :{

        _setActivevalue : (state, action) => {
          state.activeValue = action.payload

          state.activeValue == 'Kampanyalar' ? state.campaignContent = campaign : state.campaignContent = announcements
        },
        _setCamapaignModalVisible:  (state, action) => {
          state.camapaignModalVisible = action.payload
        }
    }
})

export const{_setActivevalue, _setCamapaignModalVisible}  = campaignSlice.actions
export default campaignSlice.reducer