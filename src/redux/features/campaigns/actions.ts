import { _setActivevalue, _setCamapaignModalVisible } from ".";
import { store } from "../../app";

export const setActivevalue = (activeValue : string) => store.dispatch(_setActivevalue(activeValue))
export const setCamapaignModalVisible = (status : boolean) => store.dispatch(_setCamapaignModalVisible(status))