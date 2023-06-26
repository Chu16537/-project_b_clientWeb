import { createStore } from 'vuex'
import { NowLang } from '@/script/localStorage'

export default createStore({
    state: {
        // user: null,
        user: {
            token: 'aaa'
        },
        homeData: null,
        gameIds: [],
        memberData: null,
        currentLanguage: NowLang()
    },
    getters: {

    },
    mutations: {
        setUser (state, data) {
            state.user = data
        },
        setHomeData (state, data) {
            state.homeData = data
        },
        setGameIds (state, data) {
            state.gameIds = data
        },
        setMember (state, data) {
            state.memberData = data
        },
        setCurrentLanguage (state, language) {
            state.currentLanguage = language
        }
    },
    actions: {
        setUser ({ commit }, data) {
            commit('setUser', data)
        },
        setHomeData ({ commit }, data) {
            commit('setHomeData', data)
        },
        setGameIds ({ commit }, data) {
            commit('setGameIds', data)
        },
        setMember ({ commit }, data) {
            commit('setMember', data)
        },
        setLanguage ({ commit }, language) {
            commit('setCurrentLanguage', language)
        }
    },
    modules: {
    }
})
