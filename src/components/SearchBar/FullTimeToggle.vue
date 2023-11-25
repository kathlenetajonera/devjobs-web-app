<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    checked: boolean;
}>();
const emit = defineEmits(['update:checked']);

const value = computed({
    get() {
        return props.checked;
    },
    set(value) {
        emit('update:checked', value);
    }
});
</script>

<template>
    <label className="flex cursor-pointer mr-4">
        <input type="checkbox" className="sr-only peer" v-model="value" />
        <span
            className="block w-5 h-5 bg-[#dfe3fa] rounded-sm mr-3 bg-no-repeat transition-[background] bg-center peer-checked:bg-violet peer-checked:bg-check"
        />
        <p className="text-sm font-semibold capitalize whitespace-nowrap">
            Full Time <span class="lg:hidden md:inline-flex">Only</span>
        </p>
    </label>
</template>
