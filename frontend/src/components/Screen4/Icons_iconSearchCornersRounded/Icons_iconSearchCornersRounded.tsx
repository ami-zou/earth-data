import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Icons_iconSearchCornersRounded.module.css';
import { SearchIcon } from './SearchIcon';

interface Props {
  className?: string;
  classes?: {
    search?: string;
    root?: string;
  };
  swap?: {
    search?: ReactNode;
  };
}
/* @figmaId 1:911 */
export const Icons_iconSearchCornersRounded: FC<Props> = memo(function Icons_iconSearchCornersRounded(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.search || ''} ${classes.search}`}>
        {props.swap?.search || <SearchIcon className={classes.icon} />}
      </div>
    </div>
  );
});
