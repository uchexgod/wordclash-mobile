import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const FlashIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M6.053 15.238a.585.585 0 01-.576-.683v-.004l.895-4.9H2.909a.51.51 0 01-.505-.567.507.507 0 01.11-.26l6.973-8.6a.587.587 0 011.043.434c0 .01-.002.02-.004.029L9.63 5.588h3.462a.51.51 0 01.396.827l-6.975 8.6a.587.587 0 01-.459.223z"
        fill="#FC3"
      />
    </Svg>
  );
};

export default FlashIcon;
