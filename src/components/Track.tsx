import React from 'react'
import * as RN from 'react-native'

type Props = {
  style?: RN.StyleProp<RN.ViewStyle>;
  color: RN.ColorValue;
  vertical: boolean;
  thickness: number;
  length: number;
}

function getTrackStyle (length: number, thickness: number, color: RN.ColorValue, vertical: boolean) {
  return RN.StyleSheet.create({
    thumb: {
      flexGrow: length,
      flexBasis: 0,
      borderRadius: thickness / 2,
      backgroundColor: color,
      [vertical ? 'width' : 'height']: thickness,
    },
  }).thumb
}

const Track = ({ style, thickness, length, vertical, color = 'grey' }: Props) => {
  const trackViewStyle = React.useMemo<RN.StyleProp<RN.ViewStyle>>(() => [
    getTrackStyle(length, thickness, color, vertical),
    // This is for web
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    RN.Platform.OS === "web" && { userSelect: 'none' }
    ,style
  ], [length, thickness, color, vertical, style])

  return <RN.View pointerEvents="none" style={trackViewStyle} />
}

export default React.memo(Track)
