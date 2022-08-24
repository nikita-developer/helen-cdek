export default {
    state: {
        user: {
            firstName: '',
            lastName: '',
            edits: false,
            isAuth: false,
        },
        allUsers: [
            {
                firstName: '',
                lastName: '',
                edits: true,
                isAuth: true,
            },
        ]
    },
    actions: {
        GET_AUTH(context, payload) {
            setTimeout(() => {
                context.commit('SET_AUTH')
            }, 3000);
        }
    },
    mutations: {
        SET_AUTH (state, payload) {
            state.user = {
                firstName: 'admin',
                lastName: 'developer',
                edits: true,
                isAuth: true,
            }
        }
    },
    getters: {
        ISAUTH(state) {
            return state.user;
        }
    },
}