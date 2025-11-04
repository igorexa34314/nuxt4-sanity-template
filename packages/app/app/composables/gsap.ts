export function useGsap() {
  return useNuxtApp().$gsap;
}

export function useGsapScrollTrigger() {
  return useNuxtApp().$ScrollTrigger;
}

// Replaced with Lenis
// export function useGsapScrollSmoother() {
//   return useNuxtApp().$ScrollSmoother;
// }

export function useScrollTo() {
  const gsap = useGsap();
  const getMainScroller = useMainScrollerInstance();

  const defaults = {
    offset: 0,
    duration: 600,
  };

  return (target: HTMLElement | string | number | null = null, config = {}) => {
    return new Promise<void>(resolve => {
      if (!target) {
        return resolve();
      }

      const settings = { ...defaults, ...config };

      const scroller = getMainScroller();

      if (scroller) {
        scroller.scrollTo(target, settings);
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
