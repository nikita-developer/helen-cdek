<template>
    <div class="graphics-job">
        <h1 class="archive-title archive__title">График дежурств</h1>
        <div class="table">
            <div class="table__row">
                <div class="table__col table__col-name"><p>Полина</p></div>
                <div class="table__col table__col-name"><p>Татьяна</p></div>
            </div>
            <div class="table__row">
                <div class="table__col"><p>Понедельник</p></div>
                <div class="table__col"><p>Вторник</p></div>
                <div class="table__col"><p>Среда</p></div>
                <div class="table__col"><p>Четверг</p></div>
                <div class="table__col"><p>Пятница</p></div>
                <div class="table__col"><p>Суббота</p></div>
                <div class="table__col"><p>Воскресенье</p></div>
            </div>
            <div class="table__row">
                <div class="table__col">1</div>
                <div class="table__col">2</div>
                <div class="table__col">3</div>
                <div class="table__col">4</div>
                <div class="table__col">5</div>
                <div class="table__col">6</div>
                <div class="table__col">7</div>
            </div>
            <div class="table__row">
                <div class="table__col">8</div>
                <div class="table__col">9</div>
                <div class="table__col">10</div>
                <div class="table__col">11</div>
                <div class="table__col">12</div>
                <div class="table__col">13</div>
                <div class="table__col">14</div>
            </div>
            <div class="table__row">
                <div class="table__col">15</div>
                <div class="table__col">16</div>
                <div class="table__col">17</div>
                <div class="table__col">18</div>
                <div class="table__col">19</div>
                <div class="table__col">20</div>
                <div class="table__col">21</div>
            </div>
            <div class="table__row">
                <div class="table__col">22</div>
                <div class="table__col">23</div>
                <div class="table__col">24</div>
                <div class="table__col">25</div>
                <div class="table__col">26</div>
                <div class="table__col">27</div>
                <div class="table__col">28</div>
            </div>
            <div class="table__row">
                <div class="table__col">29</div>
                <div class="table__col">30</div>
                <div class="table__col">31</div>
            </div>
        </div>
        <div class="graphics__result">
            <p>Итого:</p>
            <p><strong>Полина 14 смен</strong>, <strong>Татьяна 16 смен</strong></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>


    .table {
        display: flex;
        flex-direction: column;

        &__row {
            display: flex;

            &:not(:last-child) {
                margin-bottom: 6px;
            }
        }

        &__col {
            flex: 0 0 auto;
            width: calc(14.285% - 6px);
            margin-right: 3px;
            margin-left: 3px;
            padding: 10px 15px;
            border: 1px solid var(--color-border);
            cursor: pointer;

            &-name {
                width: calc(50% - 6px);
                text-align: center;
            }
        }

        &__name {

        }
    }
</style>