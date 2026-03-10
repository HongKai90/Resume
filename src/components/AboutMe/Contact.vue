<script setup>
import { storeToRefs } from 'pinia';

import { useLangStore } from '@store/lang';

import Card from '@cp/base/Card.vue';

const langStore = useLangStore();
const { lang } = storeToRefs(langStore);

const text = {
    title: {
        en: "Contact",
        tw: "聯絡資訊"
    },
    phone: {
        en: "Phone",
        tw: "電話"
    },
    email: {
        en: "E-mail",
        tw: "電子郵件",
    },
    live: {
        en: "Location",
        tw: "居住地"
    },
    live_val: {
        en: "Taiping, Taiching, Taiwan",
        tw: "台中市太平區"
    },
}
</script>

<template>
    <Card :title="text.title[lang]">
        <div class="contact-list">
            <div class="contact-item">
                <div class="contact-label">{{ text.phone[lang] }}</div>
                <div class="contact-value">0986-219-277</div>
            </div>

            <div class="contact-item">
                <div class="contact-label">{{ text.email[lang] }}</div>
                <div class="contact-value">paul20010313@gmail.com</div>
            </div>

            <div class="contact-item">
                <div class="contact-label">{{ text.live[lang] }}</div>
                <div class="contact-value">{{ text.live_val[lang] }}</div>
            </div>
        </div>
    </Card>
</template>

<style lang="scss" scoped>
.contact-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .contact-item {
        display: flex;
        flex-direction: column;
        padding-bottom: 0.2rem;

        .contact-label {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--bs-gray-600);
        }

        .contact-value {
            font-weight: 600;
            font-size: 0.95rem;
            word-break: break-all;
        }
    }
}

[data-bs-theme="dark"] {
    .contact-list {
        .contact-label {
            color: var(--bs-gray-500);
        }
    }
}
</style>