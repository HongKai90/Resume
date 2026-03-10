import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
    // ----- state -----
    // themes: 'light', 'dark', 'auto'
    const theme = ref('auto');

    // ----- getter -----
    const getPreferredTheme = () => {
        if (theme.value !== 'auto') {
            return theme.value;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // ----- action -----
    const applyTheme = () => {
        document.documentElement.setAttribute('data-bs-theme', getPreferredTheme());
    };

    const initTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            theme.value = storedTheme;
        } else {
            applyTheme();
        }

        // 當系統的深色模式設定在背景改變時，若是 auto 模式則需即刻更新
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (theme.value === 'auto') {
                applyTheme();
            }
        });

        // 當主題改變時，套用到 HTML 並存入 localStorage
        watch(theme, () => {
            applyTheme();
            localStorage.setItem('theme', theme.value);
        });
    };

    const setTheme = (newTheme) => {
        theme.value = newTheme;
    };

    return {
        theme,
        getPreferredTheme,
        applyTheme,
        initTheme,
        setTheme,
    };
});
