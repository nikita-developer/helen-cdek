<template>
    <textarea :value="modelValue" @input="updateTextarea" class="textarea"></textarea>
</template>

<script>
    export default {
        name: 'MyTextarea',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateTextarea(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .textarea {
        display: block;
        width: 100%;
        padding: .5em;
        border: 1px solid #d7d7d7;

        &:focus {
            outline: 0;
            border-color: #b8d9f5;
            color: #747474;
        }
    }
</style>