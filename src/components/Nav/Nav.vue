<template>
    <nav class="nav">
        <router-link class="nav__link" to="/">Главная</router-link>
        <router-link v-if="ISAUTH.isAuth" class="nav__link" to="/about">О нас</router-link>
        <router-link v-if="ISAUTH.isAuth" class="nav__link" to="/archive">Архив</router-link>
        <router-link v-if="ISAUTH.isAuth" class="nav__link" @click="SET_LOGOUT" to="/">Выйти</router-link>
        <router-link v-else class="nav__link" to="login">Войти</router-link>
    </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['ISAUTH'])
        },
        methods: {
            ...mapMutations(['SET_LOGOUT'])
        }
    }
</script>

<style lang="scss" scoped>

    .nav {
        .nav__link {
            color: var(--color-white);
            padding: 10px;

            &:last-child {
                padding-right: 0;
            }

            &:hover {
                opacity: .8;
            }
        }
    }
</style>