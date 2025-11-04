export function useAppPreviewMode() {
  const route = useRoute();

  const { enabled, state } = usePreviewMode({
    shouldEnable: () => {
      return !!route.query.preview;
    },
  });

  // NOTE: some some tricky stuff here
  // because in some reason vue not rerender component styles and classes on initial load
  // that depends on preview mode state
  // (e.g. paddings is not applied in preview mode)
  // so we are force updating the state on client side
  if (!import.meta.client) {
    return { isPreview: enabled, previewState: state };
  }

  const isPreview = ref(false);

  syncRefs(enabled, isPreview);

  // force update on client (triggers re-render on dependent components)
  onNuxtReady(() => {
    if (isPreview.value) {
      isPreview.value = false;
      nextTick(() => {
        isPreview.value = true;
      });
    }
  });

  return { isPreview, previewState: state };
}
