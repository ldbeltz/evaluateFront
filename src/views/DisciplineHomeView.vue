<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import disciplineLogo from '../assets/icons/discipline-logo.svg';
import editIcon from '../assets/icons/edit-icon.svg';

const classes = [
  { id: 1, name: 'Codigo da turma 1', amount: 14 },
  { id: 2, name: 'Codigo da turma 2', amount: 12 },
  { id: 3, name: 'Codigo da turma 3', amount: 10 },
  { id: 4, name: 'Codigo da turma 4', amount: 11 },
  { id: 4, name: 'Codigo da turma 4', amount: 11 },
  { id: 4, name: 'Codigo da turma 4', amount: 11 },
];
</script>
<template>
    <div class="discipline-home-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <div class="row discipline-data">
                    <div class="column">
                        <div class="row title-text">
                            <img class="logo" :src="disciplineLogo" alt="">
                            <div>Discipline 01</div>
                        </div>
                        <div>Breve descrição da disciplina</div>
                    </div>
                    <div class="column">
                        <div class="row-reverse content-text">
                            <div>4 Turmas</div>
                            <div><img class="logo" :src="editIcon" alt="" style="padding-right: 5px;">Editar</div>
                        </div>
                    </div>
                </div>
                <div class="column clearfix">
                    <div class="classes-cards row">
                        <card-component
                        v-for="classe in classes"
                        :key="classe.id"
                        :cardData="classe"
                        ></card-component>
                    </div>
                </div>
            </div>
            <InfosUserComponent></InfosUserComponent>
        </div>
    </div>
</template>
<style scoped>
    .content {
        padding: 60px 30px;
    }
    .classes-cards {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        gap: 16px;
    }
    .discipline-data {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 2px solid var(--primary-color);
        border-radius: 5px;
        border-top: 2px solid var(--primary-color);
        color: #fff;
    }
    .title-text{
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .content-text {
        display: flex;
        align-items: end;
        justify-content: center;
        height: 100%;
    }
</style>