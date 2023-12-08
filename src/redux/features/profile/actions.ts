import { _setModalVisible } from ".";
import { store } from "../../app";


export const setModalVisible = (state : boolean) => store.dispatch(_setModalVisible(state))