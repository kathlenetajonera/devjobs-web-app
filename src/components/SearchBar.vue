<script setup lang="ts">
import IconSearch from './Icons/IconSearch.vue';
import IconLocation from './Icons/IconLocation.vue';
import Button from './Button.vue';
</script>

<template>
    <div class="bg-white px-6 pr-4 rounded-md flex -translate-y-1/2 h-20">
        <div class="flex-[1.8] flex items-center justify-center">
            <IconSearch />
            <input
                type="text"
                placeholder="Filter by title, companies, expertise..."
                class="text-sm text-dark-gray flex-1 outline-none bg-transparent px-4"
            />
        </div>
        <div class="flex-1 flex items-center border-x-[1px] border-x-gray px-6">
            <IconLocation />
            <select class="text-sm px-4 bg-transparent appearance-none outline-none text-dark-gray">
                <option value="">Filter by location...</option>
            </select>
        </div>
        <div class="flex-1 flex items-center justify-center pl-6">
            <label className="flex cursor-pointer mr-4">
                <input type="checkbox" className="sr-only peer" />
                <span
                    className="block w-5 h-5 bg-[#dfe3fa] rounded-sm mr-3 bg-no-repeat transition-[background] bg-center peer-checked:bg-violet peer-checked:bg-check"
                />
                <p className="text-sm font-semibold capitalize">Full Time Only</p>
            </label>
            <Button />
        </div>
    </div>
</template>
