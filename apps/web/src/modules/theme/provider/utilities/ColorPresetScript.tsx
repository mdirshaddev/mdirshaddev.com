'use client';

// Color Preset Typings
import type { IColorPresetScript } from '../../types';

// React Typings
import type { FC } from 'react';

// React
import { Fragment, memo } from 'react';

/**
 * A React component that is memoized.
 * @returns inline js script
 */
const ColorPresetScript: FC<IColorPresetScript> = memo(
  props => {
    /**
     * This script renders before the react tree is added to browser
     * with this i can toggle theme mode before the component uses the tailwind styles
     */
    const scriptSrc = (() => {
      return `(function () {
  try {
    var mode = localStorage.getItem('${props.colorPresetStorageKey}');
    const root = document.documentElement;
    if (mode != '') {
      root.style.setProperty('--color-primary', mode);
    } else {
      root.style.setProperty('--color-primary', '${props.defaultColorPreset}');
    }
  } catch (e) {
    console.log(e)
  }
})();`;
    })();
    return (
      <Fragment>
        <script
          id='color-preset-hydration'
          dangerouslySetInnerHTML={{
            __html: scriptSrc
          }}
        />
      </Fragment>
    );
  },
  () => true
);

export { ColorPresetScript };
