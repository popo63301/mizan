import React from 'react';
import { Svg, Circle, G, Path, Defs } from 'react-native-svg';

export default function Hassanat({ height, width }) {
  return (
    <Svg height={height} width={width} version="1.1" viewBox="0 0 41 41">
      <Defs />
      <G id="Page-1" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <G id="Android-Copy-8" transform="translate(-209.000000, -114.000000)">
          <G id="Hassanat" transform="translate(209.000000, 114.000000)">
            <Circle id="Oval-3" x="20.5" y="20.5" fill="#82D78C" r="20.5" />
            <Path
              id="Combined-Shape"
              d="M19.6107438,25.0287689 L29.7989582,11.9884491 C30.5786462,10.990494 32.0197107,10.8135535 33.0176659,11.5932415 C34.015621,12.3729295 34.1925615,13.813994 33.4128735,14.8119491 L21.5702393,29.9698296 C20.9202101,30.801829 19.8104828,31.0631717 18.8810812,30.6752727 C18.6338246,30.6052666 18.3927427,30.4974748 18.1659253,30.3501778 L9.41872771,24.6696813 C8.20291033,23.8801203 7.85736129,22.2544399 8.64692233,21.0386225 C9.43648337,19.8228051 11.0621638,19.4772561 12.2779812,20.2668171 L19.6107438,25.0287689 Z"
              fill="#FFFFFF"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
