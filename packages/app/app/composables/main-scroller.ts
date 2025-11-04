const MAIN_SCROLLER_KEY = 'mainScroller';

export function useMainScrollerSetup(
  wrapperRef: MaybeRefOrGetter<HTMLElement | null | undefined>,
  contentRef: MaybeRefOrGetter<HTMLElement | null | undefined>
) {
  return useSetupLenisScroller(MAIN_SCROLLER_KEY, wrapperRef, contentRef);
}

export function useMainScrollerInstance() {
  return useLenisScrollerInstance(MAIN_SCROLLER_KEY);
}
