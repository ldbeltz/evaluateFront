<script setup>

const props = defineProps({
    name: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
    route: {
        type: String,
        required: false
    }
})

</script>
<template>
    <div>
        <button v-if="props.type !== 'route'" :class="`${props.type}-button ${props.size}-button`">
            {{ props.name }}
            <img v-if="props.type === 'icon'" :src="props.icon">
        </button>
        <router-link v-else :to="props.route" :class="`${props.type}-button ${props.size}-button`"> {{ props.name }}</router-link>
    </div>
</template>
<style scoped>
button, a {
    padding: 10px 5px;
    font-size: 20px;
    width: 100%;
    border: none;
    border-radius: 8px;
    font-family: Roboto;
    color: #ffffff;
    cursor: pointer;

}
.primary-button, .route-button {
    background-color: var(--primary-color);  
}
.route-button {
    text-decoration: none;
}
.secondary-button {
    background-color: #808080;
}
.small-button {
    font-size: 14px;
    padding: 6px 5px;
}
button.icon-button {
background: none;
padding: 0;
}
</style>