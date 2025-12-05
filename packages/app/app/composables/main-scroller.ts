const ROOT_SCROLLER_KEY = 'mainScroller';

export function useRootScrollerSetup() {
  return useSetupLenisScroller(ROOT_SCROLLER_KEY);
}

export function useRootScrollerInstance() {
  return useLenisScrollerInstance(ROOT_SCROLLER_KEY);
}
