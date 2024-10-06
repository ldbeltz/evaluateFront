<script setup>
import trashIcon from '../assets/icons/trash-icon.svg'
const props = defineProps({
    acronym: {
        type: String,
        required: true
    },
    textRowOne: {
        type: String,
        required: true
    },
    textRowTwo: {
        type: String,
        required: true
    },
    textRight: {
        type: String,
        required: false
    },
    hasTrash: {
        type: Boolean,
        required: false
    }
})
</script>
<template>
    <div class="item-list-container row">
        <div class="item-list-component column">
            <div class="left-content">
                <div class="acronym center">
                   {{ props.acronym }}
                </div>
                <div class="content-text">
                    <div>
                        {{ props.textRowOne }}
                    </div>
                    <div>
                        {{ props.textRowTwo }}
                    </div>
                </div>
            </div>
            <div class="right-content align-end">
                {{ props.textRight }}
            </div>
        </div>
        <img v-if="props.hasTrash === true" :src="trashIcon" alt="lixeira" class="column clearfix no-grow">
    </div>
</template>
<style scoped>
.item-list-component {
    border: 1px solid #272727;
    border-radius: 8px;
    color: #ffffff;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0;

}
.acronym {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 18px;
    padding: 5px;
    border-top: solid var(--primary-color) 2px;
    border-bottom: solid var(--primary-color) 2px;
    border-radius: 8px;
    margin-right: 5px; 
    width: 20px;
    height: 20px;
}
.left-content {
    display: flex;
}
</style>