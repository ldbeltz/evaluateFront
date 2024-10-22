<script setup>

const props = defineProps({
     type: {
        type:  String,
        required: true
    },
     placeholder: {
        type:  String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
    labelText: {
        type:String,
        required: false
    },
    modelValue: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="base-input-container">
        <label class="base-input-label" :for="props.name">
            {{ props.labelText }}
            <img :src="props.icon" alt="">
            <input class="base-input" :type="props.type" :name="props.name" :placeholder="props.placeholder"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
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