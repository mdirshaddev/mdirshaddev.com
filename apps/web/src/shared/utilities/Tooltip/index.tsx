'use client';

import clsx from 'clsx';
// TODO: Create own library for Tooltip which follows our theme strucutre and optimise the css effects name of repo will be @mdirshaddev/tippy
import { Tooltip as TippyTooltip, TooltipProps, Theme } from 'react-tippy';
import { useTheme } from 'src/modules';

type TooltipTextProps = {
  content?: React.ReactNode;
  children?: React.ReactElement;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TooltipProps;

export function Tooltip({
  content,
  className,
  children,
  theme,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipTextProps) {
  const { colorScheme } = useTheme();

  return (
    <TippyTooltip
      trigger='mouseenter'
      interactive
      theme={'light'}
      html={
        <div
          className={clsx(
            className,
            'inline-block p-2 text-gray-600 dark:text-gray-200'
          )}>
          {content}
        </div>
      }
      {...rest}>
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}>
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </TippyTooltip>
  );
}
