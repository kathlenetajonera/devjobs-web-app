<script setup lang="ts">
import { ref } from 'vue';
import FilterText from './FilterText.vue';
import FilterLocation from './FilterLocation.vue';
import FullTimeToggle from './FullTimeToggle.vue';
import ButtonIcon from '../ButtonIcon.vue';
import IconFilter from '../Icons/IconFilter.vue';
import IconSearch from '../Icons/IconSearch.vue';
import Button from '../Button.vue';

defineProps<{
    jobLocations: string[];
}>();
const emit = defineEmits(['search']);

const showFilterModal = ref(false);
const keyword = ref('');
const location = ref('');
const isFullTime = ref(false);

const toggleFilterModal = () => {
    showFilterModal.value = !showFilterModal.value;
};

const handleSearch = () => {
    const filters = {
        keyword: keyword.value,
        location: location.value,
        isFullTime: isFullTime.value
    };

    emit('search', filters);
    showFilterModal.value = false;
};
</script>

<template>
    <div
        class="bg-white dark:bg-black transition-[background] px-6 pr-4 rounded-md flex -translate-y-1/2 h-20 sm:px-4"
    >
        <div class="flex-[1.8] flex items-center justify-center xl:flex-1">
            <FilterText v-model:text="keyword" @enter="handleSearch" />

            <div class="hidden md:flex md:items-center">
                <span class="mr-5" @click="toggleFilterModal">
                    <IconFilter />
                </span>
                <ButtonIcon :onClick="handleSearch">
                    <IconSearch fill="white" />
                </ButtonIcon>
            </div>
        </div>
        <div
            class="flex-1 flex items-center border-x-[1px] border-x-gray dark:border-x-[#313743] transition-colors px-6 lg:px-4 md:hidden"
        >
            <FilterLocation :locations="jobLocations" v-model:location="location" />
        </div>
        <div class="flex-1 flex items-center justify-between pl-6 md:hidden">
            <FullTimeToggle v-model:checked="isFullTime" />
            <Button label="Search" :onClick="handleSearch" />
        </div>
    </div>
    <div
        :class="[
            showFilterModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
            'fixed top-0 left-0 w-full h-full bg-overlay z-10 transition-opacity'
        ]"
        @click.self="toggleFilterModal"
    >
        <div
            :class="[
                showFilterModal ? '-translate-y-1/2' : 'translate-y-1',
                'w-[88%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black transition-[background] rounded-md transition-transform'
            ]"
        >
            <div class="border-b-[1px] border-b-gray dark:border-b-[#313743] transition-colors p-6">
                <FilterLocation :locations="jobLocations" v-model:location="location" />
            </div>
            <div class="p-6">
                <span class="block pb-6">
                    <FullTimeToggle v-model:checked="isFullTime" />
                </span>
                <Button label="Search" :onClick="handleSearch" />
            </div>
        </div>
    </div>
</template>
