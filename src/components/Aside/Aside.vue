<template>
    <aside ref="inner_aside" class="aside" :class="{ 'visible': isOpen }" @click="close">
        <div class="aside__close" @click="isOpen = !isOpen"></div>
        <div class="aside__body">
            <slot></slot>
        </div>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: true
            }
        },
        methods: {
            innerOutside(e) {
                if (this.$refs.inner_aside && !this.$refs.inner_aside.contains(e.target)) {
                    this.isOpen = false
                }
            },
        },
        mounted() {
            document.addEventListener('click', this.innerOutside);
        },
        beforeUnmount() {
            document.removeEventListener('click', this.innerOutside);
        },
    }
</script>

<style lang="scss" scoped>

    .aside {
        min-width: 240px;
        max-width: 280px;
        background-color: var(--color-white);
        box-shadow: 6px 0 9px rgb(0 0 0 / 5%);

        &__close {
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 100px;
            box-shadow: 6px 0 9px rgb(0 0 0 / 5%);
            background-color: var(--color-white);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            background-color: var(--color-main);
            transition: 0.3s;

            &::before {
                height: 50%;
                width: 1px;
                left: 50%;
                top: 50%;
                content: '';
                background-color: var(--color-white);
            }
        }
    }
</style>