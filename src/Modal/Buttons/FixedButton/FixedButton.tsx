import { ButtonProps, useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import _debounce from 'lodash/debounce';
import React, { FC, FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { useStyles } from './FixedButton.styles';

const EVENT_LISTENER_DEBOUNCE = 600;
const EVENT_LISTENER_TAG_NAME = 'INPUT';
enum FixedButtonEventListener {
  KEYDOWN = 'keydown',
  KEYUP = 'keyup',
}

export enum FixedButtonPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type FixedButtonProps = {
  Button: FC<ButtonProps>;
  buttonRef: any;
  className?: string;
  noScroll?: boolean;
  offsetY?: number;
  position?: FixedButtonPosition;
  SecondaryButton?: FunctionComponent;
};

interface IEntrie {
  intersectionRatio: number;
}

export const FixedButton = ({
  className,
  Button,
  buttonRef,
  position,
  noScroll,
  offsetY,
  SecondaryButton,
}: FixedButtonProps) => {
  const classes = useStyles({ position, offsetY, noScroll });
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('sm'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [focused, setFocused] = useState(false);

  const setScrolled = useCallback(
    (entries) => {
      entries.forEach((entry: IEntrie) => {
        setIsScrolled(entry.intersectionRatio !== 1);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isScrolled, setIsScrolled],
  );

  useEffect(
    function showBasedOnScroll() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };

      const observer = new IntersectionObserver(setScrolled, options);

      if (buttonRef?.current) {
        observer.observe(buttonRef.current);
      }

      return () => {
        if (buttonRef?.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(buttonRef.current);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [buttonRef],
  );

  function inputEventListener(isFocused: boolean) {
    return function handleSetFocused({ target }: KeyboardEvent): void {
      if ((target as HTMLElement).tagName === EVENT_LISTENER_TAG_NAME) {
        setFocused(isFocused);
      }
    };
  }

  useEffect(function hideWhenFocusIn() {
    const keyUpEvent = _debounce(inputEventListener(false), EVENT_LISTENER_DEBOUNCE);
    const keyDownEvent = inputEventListener(true);
    window.addEventListener(FixedButtonEventListener.KEYUP, keyUpEvent);
    window.addEventListener(FixedButtonEventListener.KEYDOWN, keyDownEvent);

    return () => {
      window.removeEventListener(FixedButtonEventListener.KEYUP, keyUpEvent);
      window.removeEventListener(FixedButtonEventListener.KEYDOWN, keyDownEvent);
    };
  }, []);

  const useScrollAsShow = noScroll || isScrolled;

  const showCTA = useMemo(() => !isDesktop && useScrollAsShow && !focused, [
    isDesktop,
    useScrollAsShow,
    focused,
  ]);

  return (
    <aside className={clsx(classes.fixedBox, { [classes.showFixedBox]: showCTA }, className)}>
      {Button({ className: classes.button })}
      {SecondaryButton && <SecondaryButton />}
    </aside>
  );
};
