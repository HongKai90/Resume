<script setup>
import { onMounted } from 'vue';
import { useThemeStore } from '@store/theme';

import AboutMe from '@cp/AboutMe.vue';
import Details from '@cp/Details.vue';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});

</script>

<template>
  <div class="container">
    <AboutMe />
    <Details />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: row;
}
</style>
