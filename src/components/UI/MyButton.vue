<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton'
    }
</script>

<style lang="scss" scoped>


    .button {
        display: inline-block;
        padding: .8em 2.5em;
        background-color: var(--color-main);
        border: 0;
        border-radius: var(--border-radius-main);
        color: var(--color-white);
        cursor: pointer;
        transition: .3s;

        &:hover {
            background-color: var(--color-main-hover);
        }
    }
</style>