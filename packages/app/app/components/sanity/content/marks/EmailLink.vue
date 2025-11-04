<template>
  <a :href="buildHref" :tabindex="tabindex || undefined">
    <slot>{{ email.replace('@', '(at)') }}</slot>
  </a>
</template>

<script setup lang="ts">
import { stringifyQuery } from 'ufo';

type EmailLinkProps = {
  email: string;
  tabindex?: number | undefined;
  subject?: string | undefined;
  body?: string | undefined;
};

const { email, subject, body, tabindex } = defineProps<EmailLinkProps>();

defineSlots<{
  default: () => unknown;
}>();

const buildHref = computed(() => {
  return `mailto:${email.replace('(at)', '@')}${stringifyQuery({ subject, body })}`;
});
</script>
