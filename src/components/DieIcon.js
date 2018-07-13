import React from 'react';
import '../../public/images/dieIcons.svg';

const DieIcon = (props) => (
  <svg className={`die__icon icon-${props.name}`} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} onMouseOut={props.onMouseOut}>
    <use xlinkHref={`#dieIcons_${props.name}`} />
  </svg>
);

export default DieIcon;