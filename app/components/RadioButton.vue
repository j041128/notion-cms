<template>
    <div :class="'grid grid-cols-' + items.length">
        <template v-for="(item, index) in items">
            <div class="m-1 flex items-center pt-[19px] pb-[21px] rounded-full border border-1 has-[input:checked]:border-3 border-[#D9D9D9] has-[input:checked]:border-[#FF8F89]">
                <input type="radio" class="ring-1 ring-[#D9D9D9] checked:ring-[#FF8F89]" :value="item" :id="id + index" :name="name" v-model="value" />
                <label class="font-mincho text-[20px]" :for="id + index">{{ item }}</label>
            </div>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    id: {
        type: String,
        default: 'radios',
    },
    name: {
        type: String,
        default: 'radios',
    }
});
const value = defineModel();
</script>