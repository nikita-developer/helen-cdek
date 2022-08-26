export default {
    state: {
        user: {},
        allUsers: [
            {
                login: 'admin',
                password: '1234',
                name: 'developer',
                edits: true,
                isAuth: true,
            },
            {
                login: 'spas',
                password: '1234',
                name: 'nikita',
                edits: false,
                isAuth: true,
            },
        ],
        validate: {
            log: '',
        }
    },
    actions: {
        GET_AUTH(context, payload) {
            if(payload) {
                context.commit('SET_AUTH', payload)
            }
            setTimeout(() => {
                this.state.auth.allUsers.some(element => {
                    if(element.login === payload.login && element.password === payload.password) {
                        context.commit('SET_AUTH', element)
                        context.commit('SET_VALIDATE', '')
                        localStorage.setItem('cdek-auth', JSON.stringify(element))
                        console.log(1);
                        return
                    } else {
                        context.commit('SET_VALIDATE', 'Нет такого пользователя')
                        localStorage.removeItem('cdek-auth')
                        context.commit('SET_AUTH', {})
                        console.log(2);
                    }
                })
            }, 1000);
        }
    },
    mutations: {
        SET_AUTH (state, payload) {
            return state.user = payload
        },
        SET_VALIDATE (state, payload) {
            return state.validate.log = payload
        }
    },
    getters: {
        ISAUTH(state) {
            return state.user;
        },
        VALIDATELOGIN(state) {
            return state.validate.log;
        }
    },
}