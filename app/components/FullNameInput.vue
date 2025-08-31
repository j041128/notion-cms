<template>
    <div>
        <div class="grid grid-cols-2">
            <Input id="name1" v-model="name" class="placeholder:text-center" :placeholder="placeholder" @input="handleNameInput" />
            <Input v-model="kana" class="placeholder:text-center" :placeholder="placeholder + '：ふりがな'" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: '連名',
    }
})
const name = defineModel('name');
const kana = defineModel('kana');

let autokanaName;

onMounted(async ()=> {
    const Autokana = await import("vanilla-autokana");
    autokanaName = Autokana.bind("#name1");
});
function handleNameInput() {
    kana.value = autokanaName.getFurigana();
}
</script>