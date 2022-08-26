<template>
    <div v-if="visible" class="modal" @click="$emit('hide')">
        <div class="modal__content" @click.stop>
            <MyButton @click="$emit('hide')" class="modal__button">Закрыть</MyButton>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyModal',
        props: {
            visible: {
                typeof: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 15px;

        &__content {
            display: flex;
            flex-direction: column;
            margin: auto;
            min-width: 280px;
            min-height: 100px;
            border: 1px solid #d7d7d7;
            padding: 15px;
        }

        &__button {
            margin-left: auto;
            margin-bottom: 15px;
        }
    }
</style>