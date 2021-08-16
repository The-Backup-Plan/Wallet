import React, {forwardRef} from 'react';
import MdiReactIcon from 'mdi-react/PlusIcon';
import IconWrapper from '@renderer/components/Icon/IconWrapper';
import {IconProps} from '@renderer/components/Icon/types';

const PlusIcon = forwardRef<HTMLDivElement, IconProps>(({size = 24, ...props}, ref) => {
  return (
    <IconWrapper {...props} size={size} ref={ref}>
      <MdiReactIcon data-testid="PlusIcon" size={size} />
    </IconWrapper>
  );
});

export default PlusIcon;
