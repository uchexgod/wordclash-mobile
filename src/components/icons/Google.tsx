import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={25} height={24} fill="none" {...props}>
      <Path fill="none" d="M.5 0h24v24H.5z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.54 12.261c0-.815-.073-1.6-.21-2.352H12.5v4.448h6.19a5.29 5.29 0 01-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 23.5c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H2.223v2.98A11.496 11.496 0 0012.5 23.5z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.065 14.185A6.913 6.913 0 015.705 12c0-.758.13-1.495.36-2.185v-2.98H2.223A11.496 11.496 0 001 12c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 5.074c1.688 0 3.204.58 4.396 1.72l3.299-3.299C18.203 1.64 15.6.5 12.5.5A11.496 11.496 0 002.223 6.835l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
        fill="#EA4335"
      />
    </Svg>
  );
}

const GoogleIcon = React.memo(SvgComponent);
export default GoogleIcon;
