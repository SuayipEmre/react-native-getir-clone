import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import colors from "../../../../styles/colors";

const sectionContent = [
    {
        icon : <Ionicons name="chatbubble" size={24} color={colors.purple} />,
        text : 'Canlı Destek'
    },
    {
        icon : <FontAwesome name="map-marker" size={24} color={colors.purple}/>,
        text : 'Adreslerim'
    },
    {
        icon : <AntDesign name="heart" size={24} color={colors.purple}/>,
        text : 'Favori Ürünlerim'
    },
    {
        icon : <AntDesign name="question" size={24} color={colors.purple} />,
        text : 'Yardım'
    }

]

export default sectionContent

//<AntDesign name="questioncircle" size={24} color="black" />