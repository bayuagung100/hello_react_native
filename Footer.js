import React from "react";
import { View, Text } from "react-native";

Footer = () => {
    var copyright = "@bayu";
    return(
      <View>
        <Text>
          Ini footer
        </Text>
        <Text>{copyright}</Text>
      </View>
    )
};

export default Footer;