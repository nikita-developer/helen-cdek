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
        ]
    },
    actions: {
        GET_AUTH(context, payload) {
            setTimeout(() => {
                context.commit('SET_AUTH', payload)
            }, 600);
        }
    },
    mutations: {
        SET_AUTH (state, payload) {
            state.allUsers.forEach(element => {
                if(element.login === payload.login && element.password === payload.password) {
                    return state.user = element
                }
            });
        }
    },
    getters: {
        ISAUTH(state) {
            return state.user;
        }
    },
}