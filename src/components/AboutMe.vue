<script setup>
import { ref } from 'vue';

import { useLangStore } from '@store/lang';
import { useThemeStore } from '@store/theme';

import Profile from './AboutMe/Profile.vue';
import Contact from './AboutMe/Contact.vue';

const langStore = useLangStore();
const themeStore = useThemeStore();

const { setLang } = langStore;
const { setTheme } = themeStore;

const props = defineProps({ lang: { type: String, default: "en" } });


const text = {
    name: {
        en: "Hong-Kai Chen",
        tw: "陳虹凱"
    }
}
</script>

<template>
    <div class="about">
        <Profile />
        <Contact />
        <button @click="setLang('en')">EN</button>
        <button @click="setLang('tw')">ZH</button>
        <button @click="setTheme('dark')">Dark</button>
        <button @click="setTheme('light')">Light</button>
        <button @click="setTheme('auto')">Auto</button>
    </div>
</template>

<style lang="scss" scoped>
.about {
    width: 300px;
    padding: 1rem;
    border: 1px solid var(--bs-gray);

    gap: 1rem;
    display: flex;
    flex-direction: column;
}
</style>