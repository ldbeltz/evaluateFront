<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';

const disciplines = [
  { id: 1, name: 'Matemática', amount: 14 },
  { id: 2, name: 'Física', amount: 12 },
  { id: 3, name: 'Química', amount: 10 },
  { id: 4, name: 'Espanhol', amount: 11 },
  { id: 5, name: 'Química', amount: 4 },
  { id: 6, name: 'Português', amount: 16 },
];
</script>
<template>
    <div class="teacher-home-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <div class="disciplines-cards row">
                    <card-component
                    v-for="discipline in disciplines"
                    :key="discipline.id"
                    :cardData="discipline"
                    ></card-component>
                </div>
            </div>
            <InfosUserComponent></InfosUserComponent>
        </div>
    </div>
</template>
<style scoped>
    .teacher-home-container {
        width: 100vw;
        height: 100vh;
        background-color: #202022;
        font-family: var(--font-family); 
    }
    .content {
        padding: 60px 30px;
    }
    .disciplines-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>