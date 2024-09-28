<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

</script>
<template>
    <div>
        <button :class="`${props.type}-button`">
            {{ props.name }}
        </button>
    </div>
</template>
<style scoped>
.primary-button {
    background-color: #09B38C;
    padding: 10px 0px;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 20px;
    width: 100%;
    border: none;
    border-radius: 8px;
}
</style>