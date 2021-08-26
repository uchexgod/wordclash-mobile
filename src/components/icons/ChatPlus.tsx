import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function ChatPlus(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M19 10h-2V7h-3V5h3V2h2v3h3v2h-3v3z" fill="#9fa2a5" />
      <Path
        d="M21 12h-2v3H8.334a1.984 1.984 0 00-1.2.4L5 17V5h7V3H5a2 2 0 00-2 2v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 002-2v-3z"
        fill="#9fa2a5"
      />
    </Svg>
  );
}
