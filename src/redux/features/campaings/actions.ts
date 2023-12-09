import { _setActivevalue } from ".";
import { store } from "../../app";

export const setActivevalue = (activeValue : string) => store.dispatch(_setActivevalue(activeValue))