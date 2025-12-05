type ScrollToOptions = {
  offset?: number;
  duration?: number;
};

export function useScrollTo() {
  const gsap = useGsap();
  const getRootScroller = useRootScrollerInstance();

  const defaults = {
    offset: 0,
    duration: 600,
  } satisfies ScrollToOptions;

  return (
    target: HTMLElement | string | number | null = null,
    config: ScrollToOptions = {}
  ) => {
    return new Promise<void>(resolve => {
      if (!target) {
        return resolve();
      }

      const settings = { ...defaults, ...config } satisfies ScrollToOptions;

      const scroller = getRootScroller();

      if (scroller) {
        scroller.scrollTo(target, {
          ...settings,
          onComplete: () => {
            resolve();
          },
        });
      } else {
        gsap.to(window, {
          duration: settings.duration / 1000,
          scrollTo: { y: target, offsetY: settings.offset },
          ease: 'expo.inOut',
          onComplete: () => {
            resolve();
          },
        });
      }
    });
  };
}
