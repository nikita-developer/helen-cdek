<template>
    <div class="login">
        <form class="form-login">
            <h1 class="form-login__title">Вход в систему</h1>
            <p class="form-login__error" :class="{ 'visible': VALIDATELOGIN }">{{ VALIDATELOGIN }}</p>
            <MyInput placeholder="Логин" class="form-login__field" v-model.trim="user.login"></MyInput>
            <MyInput placeholder="Пароль" type="password" class="form-login__field" v-model.trim="user.password"></MyInput>
            <MyButton class="form-login__button" @click.prevent="submit">Войти</MyButton>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
    data() {
        return {
            user: {
                login: "",
                password: "",
            }
        };
    },
    methods: {
        ...mapActions(["GET_AUTH"]),
        submit() {
            this.GET_AUTH(this.user);
        }
    },
    computed: {
        ...mapGetters(["VALIDATELOGIN"])
    },
}
</script>

<style lang="scss" scoped>



    .login {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .form-login {
        position: relative;
        margin: auto;
        min-width: 280px;
        padding: 40px 15px;

        &__title {
            text-align: center;
            margin-bottom: 20px;
            font-size: 28px;
            font-weight: normal;
        }

        &__field {
            margin-bottom: 15px;
        }

        &__button {
            width: 100%;
        }

        &__error {
            position: absolute;
            bottom: 5px;
            left: 15px;
            color: var(--color-error);
            font-style: italic;
            opacity: 0;
            transition: .3s;

            &.visible {
                bottom: 10px;
                opacity: 1;
            }
        }
    }
</style>