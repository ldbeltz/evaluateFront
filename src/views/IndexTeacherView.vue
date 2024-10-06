<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';
import BaseButtonComponent from '../components/BaseButtonComponent.vue';
import ItemListComponent from '../components/ItemListComponent.vue';

const teachers = [
    {
        id: 0,
        acronym:'GA',
        textRowOne:'Gabriel Chagas',
        textRowTwo: 'gabriel@gmail.com',
        textRight: '********'
    },
    {
        id: 1,
        acronym:'GU',
        textRowOne:'Gustavo Santos',
        textRowTwo: 'gustavo@gmail.com',
        textRight: '********'
    },
    {
        id: 2,
        acronym:'AN',
        textRowOne:'Anderson Silva',
        textRowTwo: 'anderson@gmail.com',
        textRight: '********'
    },
    {
        id: 3,
        acronym:'JU',
        textRowOne:'Júlia Ribeiro',
        textRowTwo: 'ju@gmail.com',
        textRight: '********'
    },
    {
        id: 4,
        acronym:'IG',
        textRowOne:'Igor Antão',
        textRowTwo: 'gabriel@gmail.com',
        textRight: '********'
    },
    {
        id: 5,
        acronym:'FA',
        textRowOne:'Fabrícia Resende',
        textRowTwo: 'fabrica@gmail.com',
        textRight: '********'
    },
    {
        id: 6,
        acronym:'DI',
        textRowOne:'Diogo Santana',
        textRowTwo: 'gabriel@gmail.com',
        textRight: '********'
    },
    {
        id: 7,
        acronym:'LA',
        textRowOne:'Larissa Lima',
        textRowTwo: 'larissa@gmail.com',
        textRight: '********'
    },
    {
        id: 8,
        acronym:'PA',
        textRowOne:'Patrícia Ferreira',
        textRowTwo: 'patty@gmail.com',
        textRight: '********'
    },
    {
        id: 9,
        acronym:'LU',
        textRowOne:'Lucas Resende',
        textRowTwo: 'lucas@gmail.com',
        textRight: '********'
    },
    {
        id: 10,
        acronym:'GE',
        textRowOne:'Geovane Pinto',
        textRowTwo: 'geo@gmail.com',
        textRight: '********'
    },
]
</script>
<template>
    <div class="index-teacher-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <div class="index-teacher">
                    <div class="row">
                        <div class="column">
                            <h2>PROFESSORES</h2>
                        </div>
                        <div class="column align-center justify-end">
                            <base-button-component
                            type="route"
                            route="/createTeacher"
                            size="small"
                            name="Adicionar Professor"
                            ></base-button-component>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <item-list-component
                            v-for="teacher in teachers"
                            :key="teacher.id"
                            :acronym="teacher.acronym"
                            :textRowOne="teacher.textRowOne"
                            :textRowTwo="teacher.textRowTwo"
                            :textRight="teacher.textRight"
                            :hasTrash="true"
                            ></item-list-component>
                        </div>
                    </div>
                </div>
            </div>
            <infos-user-component></infos-user-component>
        </div>
    </div>
</template>
<style scoped>
.content {
    padding: 60px 30px;
}
.index-teacher {
    width: 100%;
    border-top: solid var(--primary-color) 2px;
    border-bottom: solid var(--primary-color) 2px;
    border-radius: 5px;
    padding: 10px;
}
h2 {
    color: #ffffff;
}
</style>