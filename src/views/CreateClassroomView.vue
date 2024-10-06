<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';
import TitlePageComponent from '../components/TitlePageComponent.vue';
import FormInputComponent from '../components/FormInputComponent.vue';
import BaseButtonComponent from '../components/BaseButtonComponent.vue';

const options = [
    {
        id: 0,
        name: "Selecione a disciplina"
    },
    {
        id: 1,
        name: "Cálculo A"
    },
    {
        id: 2,
        name: "Programação Imperativa"
    },
    {
        id: 3,
        name: "POO"
    },
    {
        id: 4,
        name: "Engenharia de Software"
    },
];
</script>
<template>
    <div class="crate-classroom-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <title-page-component text="Cadastro de Turma"></title-page-component>
                <div class="classroom-form">
                    <div class="row">
                        <div class="column">
                            <form-input-component 
                                typeInput="select" 
                                labelText="Disciplina"
                                name="Disciplina"
                                :options="options"
                                ></form-input-component>
                        </div>
                        <div class="column">
                            <form-input-component 
                                typeInput="text" 
                                labelText="Período letivo"
                                placeholder="ex: 2000.1"
                                name="periodoLetivo"
                                ></form-input-component>
                        </div>
                        <div class="column">
                            <form-input-component 
                                typeInput="text" 
                                labelText="Código da turma"
                                placeholder="máx: 2 caractéres"
                                name="codTurma"
                                ></form-input-component>
                        </div>
                    </div>
                    <div class="students-list row">
                        <div class="column add-student">
                            <form-input-component
                                typeInput="text"
                                labelText="Cadastro via E-mail do SIGAA"
                                placeholder="E-mail"
                            ></form-input-component>
                            <base-button-component
                                name="Adicionar aluno" type="primary" size="small"
                            ></base-button-component>
                        </div>
                    </div>
                    <div class="form-buttons row">
                        <div class="column is-one-third">
                            <base-button-component
                                name="Cadastrar" type="primary"
                            ></base-button-component>
                        </div>
                        <div class="column is-one-third">
                            <base-button-component
                                name="Cancelar" type="secondary"
                            ></base-button-component>
                        </div>
                    </div>
                </div>
                
            </div>
            <infos-user-component></infos-user-component>
        </div>
    </div>
</template>
<style scoped>
.crate-classroom-container {
        width: 100vw;
        height: 100vh;
        background-color: #202022;
        font-family: var(--font-family); 
    }
.content {
    padding: 60px 30px;
}
.classroom-form {
    width: 100%;
    border-top: solid var(--primary-color) 2px;
    border-bottom: solid var(--primary-color) 2px;
    border-radius: 5px;
    padding: 10px;
}
.students-list div.column, .form-buttons {
    margin-top: 32px;

}
.add-student {
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 5px;
}
.form-buttons {
 margin-top: 32px;
 justify-content: center;
}
</style>