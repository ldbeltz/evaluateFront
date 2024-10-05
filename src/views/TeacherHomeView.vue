<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import DisciplineCardComponent from '../components/DisciplineCardComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';

const disciplines = [
  { id: 1, name: 'Matemática', classes: 14 },
  { id: 2, name: 'Física', classes: 12 },
  { id: 3, name: 'Química', classes: 10 },
  { id: 4, name: 'Espanhol', classes: 11 },
  { id: 5, name: 'Química', classes: 4 },
  { id: 6, name: 'Português', classes: 16 },
];
</script>
<template>
    <div class="teacher-home-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <div class="disciplines-cards row">
                    <discipline-card-component
                    v-for="discipline in disciplines"
                    :key="discipline.id"
                    :discipline="discipline"
                    ></discipline-card-component>
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
    }
</style>