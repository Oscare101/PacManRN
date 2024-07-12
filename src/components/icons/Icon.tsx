import {SvgXml} from 'react-native-svg';

import WallIcon from './WallIcon';
import DoubleWallIcon from './DoubleWallIcon';
import OuterCornerIcon from './OuterCornerIcon';
import DoubleInnerCornerIcon from './DoubleInnerCornerIcon';
import InnerCornerIcon from './InnerCornerIcon';
import InnerCornerWallLeftIcon from './InnerCornerWallLeftIcon';
import InnerCornerWallRightIcon from './InnerCornerWallRightIcon';
import {WallIconName} from '../../constants/interfaces';

const directionDegree = {
  topLeft: 0,
  topRight: 90,
  bottomRight: 180,
  bottomLeft: 270,
  bottom: 0,
  up: 180,
  left: 90,
  right: 270,
};

export default function Icon(props: {
  name: WallIconName['value'];
  size: number;
  direction:
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
    | 'up'
    | 'bottom'
    | 'left'
    | 'right';
}) {
  const icons: Record<WallIconName['value'], any> = {
    wall: (
      <SvgXml
        xml={WallIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
        }}
      />
    ),
    doubleWall: (
      <SvgXml
        xml={DoubleWallIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
        }}
      />
    ),
    outerCorner: (
      <SvgXml
        xml={OuterCornerIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
        }}
      />
    ),
    doubleInnerCorner: (
      <SvgXml
        xml={DoubleInnerCornerIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    ),
    innerCorner: (
      <SvgXml
        xml={InnerCornerIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
        }}
      />
    ),
    innerCornerWallLeft: (
      <SvgXml
        xml={InnerCornerWallLeftIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
        }}
      />
    ),
    innerCornerWallRight: (
      <SvgXml
        xml={InnerCornerWallRightIcon()}
        width={props.size}
        height={props.size}
        style={{
          transform: [{rotate: `${directionDegree[props.direction]}deg`}],
        }}
      />
    ),
  };

  return icons[props.name];
}
