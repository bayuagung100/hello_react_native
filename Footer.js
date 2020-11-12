import React from "react";
import { View, Text } from "react-native";

//tanpa props
// Footer = () => {
//     var copyright = "@bayu";
//     return(
//       <View>
//         <Text>
//           Ini footer
//         </Text>
//         <Text>{copyright}</Text>
//       </View>
//     )
// };

//dengan props
Footer = (props) => {
    var copyright = "@bayu";
    return(
      <View>
        <Text>
          Ini footer
        </Text>
        <Text>{copyright} {props.tahun}</Text>
      </View>
    )
};

export default Footer;