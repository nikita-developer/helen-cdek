<template>
    <ul>
        <li>
            <router-link to="/">Главная</router-link>
        </li>
        <li>
            <router-link to="about">О нас</router-link>
        </li>
        <li>
            <router-link to="archive">Архив</router-link>
        </li>
        <li>
            <router-link to="login">Логин</router-link>
        </li>
        <li v-if="ISAUTH.isAuth">
            <router-link to="/">Выйти</router-link>
        </li>
        <li v-else>
            <router-link to="login">Войти</router-link>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['ISAUTH'])
        }
    }
</script>

<style lang="scss" scoped>

</style>