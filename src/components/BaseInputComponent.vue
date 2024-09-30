<script setup>
import key from '../assets/icons/key-icon.svg'
import letter from '../assets/icons/key-icon.svg'
const props = defineProps({
     type: {
        type:  String,
        required: true
    },
     placeholder: {
        type:  String,
        required: false
    }
})
</script>
<template>
    <div class="base-input-container">
        <label class="base-input-label" for="">
            <img :src="key" alt="">
            <input class="base-input" :type="props.type" :placeholder="props.placeholder">
        </label>
    </div>
</template>
<style scoped>
.base-input-container, .base-input {
    width: 100%;
}
.base-input {
    padding: 10px 5px;
    box-sizing: border-box;
    border: none;
}
.base-input:focus{
    outline: none;
    box-shadow: none;
    border: none;
}
.base-input-container {
    border-bottom: 1px solid #A6A6A6;
}
.base-input-container:focus-within {
    border-bottom: 1px solid var(--primary-color);
}
.base-input-label {
    display: flex;
}
</style>