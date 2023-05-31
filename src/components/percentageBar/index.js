import React, { useState } from "react";

import { Text, View } from "react-native";
import { fontSizes } from "../../theme";

const PercentageBar = ({
  percentage,
  height,
  backgroundColor,
  completedColor,
  title,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: 40,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            display: "flex",
            paddingLeft: 20,
            width: 110,
            height: getheight,
          }}
        >
          <Text
            style={{
              color: "#fff",
              padding: 0,
              fontSize: fontSizes.detailsInfo,
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            display: "flex",
            paddingRight: 20,
            flex: 1,
            position: "relative",
          }}
        >
          <View
            style={{
              width: "100%",
              height: getheight,
              borderRadius: 5,
              borderColor: getBackgroundColor,
              opacity: 0.6,
              borderWidth: 1,
              position: "absolute",
            }}
          />
          <View
            style={{
              width: getPercentage ? getPercentage : 0,
              height: getheight,
              borderRadius: 5,
              backgroundColor: getCompletedColor,
              position: "absolute",
            }}
          />
          <View
            style={{
              width: getPercentage ? getPercentage : 0,
              height: getheight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                padding: 0,
                fontSize: fontSizes.detailsInfo,
              }}
            >
              {getPercentage}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PercentageBar;
