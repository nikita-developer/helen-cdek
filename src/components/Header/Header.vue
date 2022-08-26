<template>
    <header class="header">
        <Logo class="header__logo"></Logo>
        <Nav class="header__nav"></Nav>
    </header>
</template>

<script>
    import Nav from '@/components/Nav/Nav.vue';
    import Logo from '../Logo/Logo.vue';
    export default {
    components: { Nav, Logo }
}
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: var(--color-main);

        &__logo {
            margin-right: 30px;
        }

        &__nav {
            margin-left: auto;
        }
    }
</style>