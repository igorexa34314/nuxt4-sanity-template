import { defineNuxtModule, useLogger } from 'nuxt/kit';

// This module extends @nuxt/image 'sanity' provider options with runtime config
// to not duplicate sanity config into the image module
export default defineNuxtModule({
  meta: { name: 'extend-nuxt-image-options' },
  moduleDependencies: nuxt => {
    const opts = nuxt.options.runtimeConfig.public.sanity;
    //   Set provider to 'sanity' if it's 'ipx' by default
    const provider =
      nuxt.options.image.provider === 'ipx'
        ? 'sanity'
        : nuxt.options.image.provider;
    return {
      '@nuxt/image': {
        overrides: {
          provider,
          sanity: {
            projectId: opts.projectId,
            dataset: opts.dataset,
          },
        },
      },
    };
  },
  setup() {
    const logger = useLogger('@nuxt/image: extend options');
    logger.success(
      '[@nuxt/image] Sanity provider extended with options from runtime config'
    );
  },
});
