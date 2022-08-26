<template>
    <footer class="footer">
        <Logo class="footer__logo"></Logo>
        <p class="footer__copy">©2000 — {{ new Date().getFullYear() }}, Курьерская компания СДЭК</p>
    </footer>
</template>

<script>
import Logo from '../Logo/Logo.vue';
    export default {
    components: { Logo }
}
</script>

<style lang="scss" scoped>


    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background-color: var(--color-dark);

        &__logo {
            margin-right: 30px;
        }

        &__copy {
            font-size: 14px;
            color: var(--color-white);
        }
    }
</style>