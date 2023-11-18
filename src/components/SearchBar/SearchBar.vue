<script setup lang="ts">
import FilterText from './FilterText.vue';
import FilterLocation from './FilterLocation.vue';
import FullTimeAndSearch from './FullTimeAndSearch.vue';
import ButtonIcon from '../ButtonIcon.vue';
import IconFilter from '../Icons/IconFilter.vue';
import IconSearch from '../Icons/IconSearch.vue';
</script>

<template>
    <div class="bg-white px-6 pr-4 rounded-md flex -translate-y-1/2 h-20 sm:px-4">
        <div class="flex-[1.8] flex items-center justify-center xl:flex-1">
            <FilterText />

            <div class="hidden md:flex md:items-center">
                <span class="mr-5">
                    <IconFilter />
                </span>
                <ButtonIcon>
                    <IconSearch fill="white" />
                </ButtonIcon>
            </div>
        </div>
        <div class="flex-1 flex items-center border-x-[1px] border-x-gray px-6 lg:px-4 md:hidden">
            <FilterLocation />
        </div>
        <div class="flex-1 flex items-center justify-between pl-6 md:hidden">
            <FullTimeAndSearch />
        </div>
    </div>
</template>
