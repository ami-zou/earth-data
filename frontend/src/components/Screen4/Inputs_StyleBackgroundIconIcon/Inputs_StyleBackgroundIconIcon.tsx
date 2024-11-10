import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Icons_iconSearchCornersRounded } from '../Icons_iconSearchCornersRounded/Icons_iconSearchCornersRounded';
import classes from './Inputs_StyleBackgroundIconIcon.module.css';
import { SearchIcon } from './SearchIcon';

interface Props {
  className?: string;
  classes?: {
    search?: string;
    icons?: string;
    root?: string;
  };
  swap?: {
    search?: ReactNode;
  };
  text?: {
    typeSomething?: ReactNode;
  };
}
/* @figmaId 1:3871 */
export const Inputs_StyleBackgroundIconIcon: FC<Props> = memo(function Inputs_StyleBackgroundIconIcon(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Icons_iconSearchCornersRounded
        className={props.classes?.icons || ''}
        classes={{ search: `${props.classes?.search || ''} ${classes.search}` }}
        swap={{
          search: props.swap?.search || (
            <div className={classes.search}>
              <SearchIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      {props.text?.typeSomething != null ? (
        props.text?.typeSomething
      ) : (
        <div className={classes.typeSomething}>Type something...</div>
      )}
    </div>
  );
});
