<template>
  <NuxtLink :to="parsedUrl" :target="blank ? '_blank' : undefined">
    <slot>{{ parsedUrl }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
import { joinURL, isEqual, withoutHost } from 'ufo';

type ExternalLinkProps = {
  to?: string;
  blank?: boolean;
};

const { to, blank = true } = defineProps<ExternalLinkProps>();

defineSlots<{
  default: () => unknown;
}>();

const site = useSiteConfig();

const parsedUrl = computed(() => {
  return to && isEqual(joinURL(site.url, withoutHost(to)), to)
    ? withoutHost(to)
    : to;
});
</script>
