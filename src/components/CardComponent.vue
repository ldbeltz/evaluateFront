<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
});
</script>
<template>
    <div class="card-content row-reverse">
        <div class="data-name">{{ cardData.name }}</div>
        <div class="amount">{{ cardData.amount }} Turmas</div>
    </div>
</template>
<style scoped>
    .card-content {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 10px;
        height: 120px;
        background: linear-gradient(150deg, rgba(0,156,99,1) 0%, rgba(8,139,168,1) 95%);
        font-family: var(--font-family);
        flex: 0 0 22%;
    }
    .data-name {
        font-size: 20px;
    }
    .amount {
        border-top: 1px solid #fff;
    }
</style>