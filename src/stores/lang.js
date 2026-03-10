import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLangStore = defineStore('lang', () => {
  // ----- state -----
  const lang = ref('tw');

  // ----- getter -----

  // ----- action -----
  function setLang(value) {
    lang.value = value;
  }

  return {
    // ----- state -----
    lang,
    // ----- getter -----
    // ----- action -----
    setLang,
  }
})
