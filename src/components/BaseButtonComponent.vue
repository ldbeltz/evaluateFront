<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: false
    }
})

</script>
<template>
    <div>
        <button :class="`${props.type}-button ${props.size}-button`">
            {{ props.name }}
        </button>
    </div>
</template>
<style scoped>
button {
    padding: 10px 5px;
    font-size: 20px;
    width: 100%;
    border: none;
    border-radius: 8px;
    font-family: Roboto;
    color: #ffffff;

}
.primary-button {
    background-color: var(--primary-color);  
}
.secondary-button {
    background-color: #808080;
}
.small-button {
    font-size: 14px;
    padding: 6px 5px;
}
</style>