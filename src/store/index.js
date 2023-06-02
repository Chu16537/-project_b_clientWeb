import { createStore } from 'vuex'
import { NowLang } from '@/script/localStorage'

export default createStore({
    state: {
        user: null,
        homeData: null,
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
