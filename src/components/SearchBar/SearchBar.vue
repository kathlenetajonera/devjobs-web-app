<script setup lang="ts">
import { computed, ref } from 'vue';
import FilterText from './FilterText.vue';
import FilterLocation from './FilterLocation.vue';
import FullTimeToggle from './FullTimeToggle.vue';
import ButtonIcon from '../ButtonIcon.vue';
import IconFilter from '../Icons/IconFilter.vue';
import IconSearch from '../Icons/IconSearch.vue';
import Button from '../Button.vue';
import type { JobType, JobsArrayType } from '@/types/jobTypes';

const showFilterModal = ref(false);

const toggleFilterModal = () => {
    showFilterModal.value = !showFilterModal.value;
};

const handleSearch = () => {
    console.log('handle search');
};

const props = defineProps<{
    jobs: JobsArrayType;
}>();

const jobLocations = computed(() => {
    const locations = props.jobs.map((job: JobType) => job.location);
    return [...new Set(locations)];
});
</script>

<template>
    <div class="bg-white px-6 pr-4 rounded-md flex -translate-y-1/2 h-20 sm:px-4">
        <div class="flex-[1.8] flex items-center justify-center xl:flex-1">
            <FilterText />

            <div class="hidden md:flex md:items-center">
                <span class="mr-5" @click="toggleFilterModal">
                    <IconFilter />
                </span>
                <ButtonIcon>
                    <IconSearch fill="white" />
                </ButtonIcon>
            </div>
        </div>
        <div class="flex-1 flex items-center border-x-[1px] border-x-gray px-6 lg:px-4 md:hidden">
            <FilterLocation :locations="jobLocations" />
        </div>
        <div class="flex-1 flex items-center justify-between pl-6 md:hidden">
            <FullTimeToggle />
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
                'w-[88%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md transition-transform'
            ]"
        >
            <div class="border-b-[1px] border-b-gray p-6">
                <FilterLocation :locations="jobLocations" />
            </div>
            <div class="p-6">
                <span class="block pb-6">
                    <FullTimeToggle />
                </span>
                <Button label="Search" :onClick="handleSearch" />
            </div>
        </div>
    </div>
</template>
