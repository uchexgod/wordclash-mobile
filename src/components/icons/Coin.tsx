import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Coin = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <Path
        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
        stroke="#9A6FDA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6H6v4h4V6z"
        stroke="#EEC170"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CoinIcon = React.memo(Coin);
export default CoinIcon;
