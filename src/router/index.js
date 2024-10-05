import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import TeacherHomeView from '../views/TeacherHomeView.vue';
import CreateClassroomView from '../views/CreateClassroomView.vue';
import DisciplineHomeView from '../views/DisciplineHomeView.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/teacherHome',
        name: 'teacherHome',
        component: TeacherHomeView
    },
    {
        path: '/createClassroom',
        name: 'createClassroom',
        component: CreateClassroomView
    },
    {
        path: '/disciplineHome',
        name: 'disciplineHome',
        component: DisciplineHomeView
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;