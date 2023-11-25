<script setup lang="ts">
import { computed, ref } from 'vue';
import type { JobType } from '@/types/jobTypes';
import type { FiltersType } from '@/types/filterTypes';
import Container from '../components/Layout/Container.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import EmptyPlaceholder from '@/components/EmptyPlaceholder.vue';
import data from '../assets/data.json';

const jobs = ref(data);
const jobsToRender = ref(data.slice(0, 12));
const showLoadMore = ref(true);

const jobLocations = computed(() => {
    const locations = jobs.value.map((job: JobType) => job.location);
    return [...new Set(locations)];
});

const handleLoadMore = () => {
    jobsToRender.value = data;
    showLoadMore.value = false;
};

const matchText = (string: string, keyword: string) => {
    if (!keyword) return true;
    return string.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
};

const filterData = (filters: FiltersType) => {
    const { keyword, location, isFullTime } = filters;
    const contract = isFullTime ? 'Full Time' : '';
    const filtered = jobs.value.filter((job) => {
        const matchPosition = matchText(job.position, keyword);
        const matchCompany = matchText(job.company, keyword);
        const matchKeyword = matchPosition || matchCompany;
        const matchLocation = matchText(job.location, location);
        const matchContract = matchText(job.contract, contract);

        const isMatch = matchKeyword && matchLocation && matchContract;
        return isMatch;
    });

    jobsToRender.value = filtered;
    showLoadMore.value = false;
};
</script>

<template>
    <div class="bg-light-gray dark:bg-dark transition-[background] min-h-[calc(100vh-160px)] pb-20">
        <Container>
            <SearchBar :jobLocations="jobLocations" @search="filterData" />

            <div v-if="jobsToRender.length > 0">
                <div class="grid grid-cols-cards gap-6 gap-y-14 my-14 lg:gap-x-3 md:gap-y-12">
                    <Card
                        v-for="job in jobsToRender"
                        :key="job.id"
                        :id="job.id"
                        :logo="job.logo"
                        :logoBackground="job.logoBackground"
                        :postedAt="job.postedAt"
                        :contract="job.contract"
                        :position="job.position"
                        :company="job.company"
                        :location="job.location"
                    />
                </div>

                <div v-if="showLoadMore">
                    <div class="text-center">
                        <Button label="Load more" :onClick="handleLoadMore" />
                    </div>
                </div>
            </div>
            <div v-else>
                <EmptyPlaceholder />
            </div>
        </Container>
    </div>
</template>
