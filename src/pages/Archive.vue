<template>
    <div class="archive">
        <Aside class="archive__aside">
            <div class="archive-aside">
                <div class="archive-nav">
                    <router-link class="archive-nav__link" to="/archive/graphics-money">График зарплаты</router-link>
                    <router-link class="archive-nav__link" to="/archive/graphics-job">График работы</router-link>
                </div>
            </div>
        </Aside>
        <div class="archive__body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Aside from '@/components/Aside/Aside.vue';
    export default {
    components: { Aside },
}
</script>

<style lang="scss">

    .archive {
        position: relative;
        display: flex;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;

        &__body {
            flex-grow: 1;
            padding: 15px;
        }

        &__aside {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 2;
            transform: translate(-100%);
            transition: .3s;

            &.visible {
                transform: translate(0);
            }
        }

        &__title {
            margin-bottom: 30px;
        }
    }

    .archive-title {
        font-size: 28px;
    }

    .archive-nav {
        &__link {
            display: block;
            padding: 15px 30px;
            font-weight: 700;

            &:hover {
                color: var(--color-main)
            }

            &.active {
                background-color: #f4f4f4;
            }
        }
    }
</style>