import axios from 'axios'

const apiClient = axios.create({
    baseURL: '/api' // 跨域請求的目標伺服器
})

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // 允許所有來源的請求
    }
}

function basePost (path = '', request) {
    const data = {
        isSuccess: false
    }
    return apiClient.post(path, request, config).then((res) => {
        data.isSuccess = true
        data.data = res.data
        return data
    }).catch((err) => {
        console.log('post fail', err)
        return data
    })
}

function baseGet (path = '', params) {
    const data = {
        isSuccess: false
    }

    return apiClient.get(path, { params }).then((res) => {
        data.isSuccess = true
        data.data = res.data
        return data
    }).catch((err) => {
        console.log('get fail', err)
        return data
    })
}

// 登入
export function login (request) {
    return basePost('/api/login', request)
}

// 首頁資料
export function getHomeData (request) {
    return baseGet('/api/getHomeData', request)
}

// 會員資料
export function getMemberData (request) {
    return basePost('/api/getMemberData', request)
}
