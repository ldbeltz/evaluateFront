<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import DisciplineCardComponent from '../components/DisciplineCardComponent.vue';
import userLogo from '../assets/icons/user-logo.svg';

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
            <div class="column is-one-fifth">
                <div class="row-reverse teacher-data ">
                    <div class="row text">
                        <img class="logo" :src="userLogo" alt="">
                        <div class="">Usuário Nome completo</div>
                    </div>
                    <div class="row-reverse content-text">
                        <div>Universidade Federal de Sergipe</div>
                        <div>12 Disciplinas</div>
                        <div>24 Turmas</div>
                    </div>
                </div>
            </div>
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
    .teacher-data {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 2px solid var(--primary-color);
        border-radius: 5px;
        border-top: 2px solid var(--primary-color);
    }
    .text{
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .content-text {
        color: #fff;
        font-size: 14px;
        padding-top: 40px;
    }
    .logo{
        width: 40px;
        height: auto;
        padding: 0px 10px;
    }
    .teste1 {
        background-color: #2c2cd8;
    }
</style>