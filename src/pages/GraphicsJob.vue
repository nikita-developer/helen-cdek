<template>
    <div class="graphics-job">
        <!-- <h1 class="archive-title archive__title">График дежурств</h1> -->
        <button @click="newDate" class="graphics-job-add">Начать новый месяц</button>
        <label class="graphics-job-search">
            <input @change="search" v-model="calendar" type="date" class="graphics-job-search__field">
        </label>
        <div class="graphics-job-name">
            <div class="graphics-job-name__item user-one-color">
                <p>Полина</p>
            </div>
            <div class="graphics-job-name__item">
                <p>Татьяна</p>
            </div>
        </div>
        <div class="table" v-for="(item, index) in newMont" :key="item.id">
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
                calendar: '2022-08-31',
                newMont: [],
                mont: [
                    {
                        id: 1,
                        data: '2022-08-31',
                        name: 'Август',
                        day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                        users: [],
                    },
                ],
            }
        },
        computed: {
            ...mapGetters(['ISAUTH'])
        },
        methods: {
            search() {
                let result = this.mont.filter(elem => {
                    if (elem.data.indexOf(this.calendar) !== -1) return elem
                })

                this.newMont = result
            },
            userActive(day, users) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i] == day) {
                        return true
                    }
                }
            },
            editsCount(index, day) {
                if (this.ISAUTH.edits) {
                    this.newMont[index].users.find((el, idx) => {
                        if (el === day) {
                            return this.newMont[index].users.splice(idx, 1)
                        }
                        if (idx === this.newMont[index].users.length - 1) {
                            return this.newMont[index].users.push(day)
                        }
                    })
                }
            },
            newDate() {
                let month = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
                let year = new Date().getFullYear()
                let day = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()

                let fullDate = `${year}-${month}-${day}`
                let fullDay = Math.round((new Date(year, month, 1) - new Date(year, month - 1, 1)) / 1000 / 3600 / 24)
                let monthText = ['Январь', 'Феврль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
                let montTextThis = ''

                for (let i = 0; i <= monthText.length; i++) {
                    if (new Date().getMonth() == i) {
                        montTextThis = monthText[i]
                    }
                }

                let mont = {
                    id: new Date() + Math.random(),
                    data: fullDate,
                    name: montTextThis,
                    day: [],
                    users: [],
                }

                for (let i = 1; i <= fullDay; i++) {
                    mont.day.push(i)
                }

                this.mont.push(mont)
            },
        },
        mounted() {
            this.search()
        },
    }
</script>

<style lang="scss" scoped>
    .table {
        display: flex;
        flex-direction: column;
        overflow: auto;

        &:not(:last-child) {
            margin-bottom: 30px;
        }

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
            margin-top: 10px;

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

    .graphics-job-search {
        margin-bottom: 15px;
        margin-right: 3px;
        margin-left: 3px;

        &__field {
            display: block;
            font-size: 18px;
            width: 100%;
            padding: 7.5px 10px;
            border: 1px solid var(--color-border);

            &:focus {
                outline: 1px solid var(--color-main);;
            }
        }
    }
</style>