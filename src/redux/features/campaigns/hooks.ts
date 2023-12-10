import { useSelector } from "react-redux";
import { RootState } from "../../app";

export const useActiveValue = () => useSelector((state : RootState) => state.campaign.activeValue)
export const useCampaignContent = () => useSelector((state : RootState) => state.campaign.campaignContent)
export const useCampaignModal= () => useSelector((state : RootState) => state.campaign.camapaignModalVisible)