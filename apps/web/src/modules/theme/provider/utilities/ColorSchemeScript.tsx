'use client';

// Color Scheme Typings
import type { IColorSchemeScript } from '../../types';

// React Typings
import type { FC } from 'react';

// Constants
import { MEDIA } from 'src/constants/client';

// React
import { Fragment, memo } from 'react';

/**
 * A React component that is memoized.
 * @returns inline js script
 */
const ColorSchemeScript: FC<IColorSchemeScript> = memo(
  props => {
    /**
     * This script renders before the react tree is added to browser
     * with this i can toggle theme mode before the component uses the tailwind styles
     */
    const scriptSrc = (() => {
      return `(function () {
  try {
    var mode = localStorage.getItem('${props.colorSchemeStorageKey}');
    var supportDarkMode =
      window.matchMedia('${MEDIA}').matches === true;
    if (!mode && supportDarkMode) document.documentElement.setAttribute('data-mode', '${props.defaultColorScheme}');
    if (!mode) return;
    document.documentElement.setAttribute('data-mode', mode);
  } catch (e) {
    console.log(e)
  }
})();`;
    })();
    return (
      <Fragment>
        <script
          id='color-scheme-hydration'
          dangerouslySetInnerHTML={{
            __html: scriptSrc
          }}
        />
      </Fragment>
    );
  },
  () => true
);

export { ColorSchemeScript };
