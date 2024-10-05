<script setup>

const props = defineProps({
    text: {
        type: String,
        required: true
    }
}) 
</script>
<template>
    <div class="title-page-container">
        <h1>{{ props.text }}</h1>
    </div>
</template>
<style scoped>
.title-page-container  > * {
    color: #ffffff;
}
.title-page-container > h1 {
 border-left: 8px var(--primary-color) solid;
 border-radius: 8px;
 padding-left: 8px;
}
</style>