<template>
  <div>
    <h2>Default layout</h2>
    <AppHeader />
    <main>
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default: () => unknown;
}>();

useRootScrollerSetup();
</script>
