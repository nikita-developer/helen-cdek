import {createStore} from 'vuex'

export default createStore({
    state: {
        likes: 1,
        isAuth: false
    },
    getters: {
        
    },
    mutations: {
        incrementLikes(state) {
            state.likes += 1
        },
        decrementLikes(state) {
            state.likes = state.likes - 1
        },
    },
    actions: {

    },
    modules: {

    }
})