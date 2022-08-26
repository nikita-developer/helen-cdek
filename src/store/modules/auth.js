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
            {
                login: 'helen',
                password: '1234',
                name: 'nikita',
                edits: true,
                isAuth: true,
            },
        ],
        validate: {
            log: '',
        }
    },
    actions: {
        GET_MOUNTED(context, payload) {
            if(localStorage.getItem('cdek-auth')) {
                context.commit('SET_AUTH', payload)
                setTimeout(() => {
                    let element = this.state.auth.allUsers
                    for (let i = 0; i <= element.length; i++) {
                        if(element[i].login === payload.login && element[i].password === payload.password) {
                            context.commit('SET_AUTH', element[i])
                            return
                        }
                        localStorage.removeItem('cdek-auth')
                        context.commit('SET_AUTH', {})
                    }
                }, 1000);
            }
        },
        GET_AUTH(context, payload) {
            setTimeout(() => {
                let element = this.state.auth.allUsers
                for (let i = 0; i < element.length; i++) {
                    if(element[i].login === payload.login && element[i].password === payload.password) {
                        context.commit('SET_AUTH', element[i])
                        context.commit('SET_VALIDATE', '')
                        localStorage.setItem('cdek-auth', JSON.stringify(element[i]))
                        return
                    } else {
                        context.commit('SET_VALIDATE', 'Нет такого пользователя')
                    }
                }
            }, 1000);
        }
    },
    mutations: {
        SET_AUTH (state, payload) {
            return state.user = payload
        },
        SET_VALIDATE (state, payload) {
            return state.validate.log = payload
        },
        SET_LOGOUT(state) {
            localStorage.removeItem('cdek-auth')
            return state.user = {}
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