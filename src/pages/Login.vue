<template>
    <div>
        <h1>Страница логина</h1>
        <form class="form">
            <input v-model="user.login" type="text" class="form-field form__field" placeholder="Введите логин">
            <input v-model="user.password" type="text" class="form-field form__field" placeholder="Введите пароль">
            <button class="form-button form__button" @click.prevent="submit">Войти</button>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                user: {
                    login: '',
                    password: '',
                }
            }
        },
        methods: {
            ...mapActions(['GET_AUTH']),
            submit() {
                this.GET_AUTH(this.user)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>