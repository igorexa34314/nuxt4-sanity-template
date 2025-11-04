import type { LenisOptions } from 'lenis';
import type { LenisInstanceId } from '~/plugins/lenis';

export function useLenis() {
  return useNuxtApp().$lenis;
}

export function useSetupLenisScroller(
  scrollerKey: LenisInstanceId,
  wrapperRef: MaybeRefOrGetter<HTMLElement | null | undefined>,
  contentRef: MaybeRefOrGetter<HTMLElement | null | undefined>
) {
  const lenis = useLenis();

  watch(
    () => [toValue(contentRef), toValue(wrapperRef)],
    () => {
      const wrapperEl = toValue(wrapperRef);
      const contentEl = toValue(contentRef);
      if (contentEl && wrapperEl) {
        setupScroller({
          wrapper: wrapperEl,
          content: contentEl,
        });

        onWatcherCleanup(() => {
          destroyScroller();
        });
      }
    }
  );

  function setupScroller(config: LenisOptions = {}) {
    const defaults: LenisOptions = {
      // lerp: 0.8,
    };

    lenis.create(scrollerKey, {
      ...defaults,
      ...config,
    });
  }

  function getScroller() {
    return lenis.get(scrollerKey);
  }

  function destroyScroller() {
    if (getScroller()) {
      lenis.destroy(scrollerKey);
    }
  }

  return { getScroller };
}

export function useLenisScrollerInstance(scrollerKey: LenisInstanceId) {
  const lenis = useLenis();
  return (warn?: boolean) => lenis.get(scrollerKey, warn);
}
