<template>
    <div class="graphics-job">
        <!-- <h1 class="archive-title archive__title">График дежурств</h1> -->
        <div class="graphics-job-name">
            <div class="graphics-job-name__item user-one-color">
                <p>Полина</p>
            </div>
            <div class="graphics-job-name__item">
                <p>Татьяна</p>
            </div>
        </div>
        <div class="table" v-for="(item, index) in mont" :key="item.id">
            <div class="table__body">
                <div class="table__mont">{{item.name}}</div>
                <div class="table__row">
                    <div class="table__col">Пн</div>
                    <div class="table__col">Вт</div>
                    <div class="table__col">Ср</div>
                    <div class="table__col">Чт</div>
                    <div class="table__col">Пт</div>
                    <div class="table__col">Сб</div>
                    <div class="table__col">Вс</div>
                </div>
                <div class="table__row table__row--day">
                    <div class="table__col" @click="editsCount(index, day)" :class="{ 'user-one-color': userActive(day, item.users) }" v-for="day in item.day" :key="day">{{day}}</div>
                </div>
            </div>
            <div class="table__result">
                <p><strong>Итого:</strong></p>
                <p>{{ firstName }} {{ item.users.length }} смен, {{ lastName }} {{ item.day.length - item.users.length }} смен</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                firstName: 'Татьяна',
                lastName: 'Полина',
                mont: [
                    {
                        id: 1,
                        name: 'Август',
                        day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                        users: [1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30],
                    },
                    {
                        id: 1,
                        name: 'Сентябрь',
                        day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                        users: [1, 2, 5, 6, 9, 10, 22, 25, 26, 29, 30],
                    },
                ],
            }
        },
        computed: {
            ...mapGetters(['ISAUTH'])
        },
        methods: {
            userActive(day, users) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i] == day) {
                        return true
                    }
                }
            },
            editsCount(index, day) {
                if (this.ISAUTH.edits) {
                    this.mont[index].users.find((el, idx) => {
                        if (el === day) {
                            return this.mont[index].users.splice(idx, 1)
                        }
                        if (idx === this.mont[index].users.length - 1) {
                            return this.mont[index].users.push(day)
                        }
                    })
                }
            },
        }
    }
</script>

<style lang="scss" scoped>


    .table {
        display: flex;
        flex-direction: column;
        overflow: auto;

        &__mont {
            margin-bottom: 5px;
            margin-top: 5px;
            margin-left: 3px;
            font-weight: bold;
        }

        &__body {
            display: table;
        }

        &__row {
            display: flex;

            &:not(:last-child) {
                margin-bottom: 6px;
            }

            &--day {
                flex-wrap: wrap;
            }
        }

        &__col {
            flex: 0 0 auto;
            width: calc(14.285% - 6px);
            margin: 3px;
            padding: 10px 15px;
            border: 1px solid var(--color-border);
            cursor: pointer;
            text-align: center;
        }

        &__result {
            margin-top: 20px;

            & p:first-child {
                margin-bottom: 5px;
            }
        }

        @media (max-width: 480px) {
            &__col {
                padding-right: 0;
                padding-left: 0;
                font-size: 14px;
            }
        }
    }

    .user-one-color {
        background-color: rgb(211, 255, 209);
    }

    .graphics-job-name {
        display: flex;

        &__item {
            width: calc(50% - 6px);
            text-align: center;
            border: 1px solid var(--color-border);
            padding: 10px 15px;
            margin: 3px;
        }
    }
</style>