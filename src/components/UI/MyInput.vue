<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
    export default {
        name: 'MyInput',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input {
        display: block;
        width: 100%;
        padding: .5em;
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-main);
        color: var(--color-text-gray);

        &:focus {
            outline: 0;
            border-color: var(--color-main-focus);
            color: var(--color-text);
        }
    }
</style>