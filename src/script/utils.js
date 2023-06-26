const { ERRORCODE } = require('./const')

function debounce (fn, delay) {
    let timer = null
    return function () {
        const context = this
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

function resizeError () {
    const _ResizeObserver = window.ResizeObserver
    window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
        constructor (cb) {
            cb = debounce(cb, 16)
            super(cb)
        }
    }
}

/*
arrayObj =[
    {
        gameId: 1 ,
        ... 其他 資料
    },
    {
        gameId: 2 ,
        ... 其他 資料
    }
]

output = [
    {
        key:v.gameId,
        value: v.gameId
    }
]
*/
function arrObj2gameArrObj (arr) {
    const ids = {}

    Object.values(arr).map((v) => {
        ids[v.id] = {
            key: v.id,
            value: 'game_name_' + v.id
        }
        return ''
    })

    return ids
}

/*
arrayObj =[1,2]

output = [
    {
        key:1,
        value: game_name_1
    },
    {
        key:2,
        value: game_name_2
    },
]
*/
function gameIds2GameArrObj (arr) {
    const obj = {}

    Object.values(arr).map((v) => {
        obj[v] = {
            key: v,
            value: 'game_name_' + v
        }
        return ''
    })

    arr = Object.values(obj)
    return arr
}

// 取得圖片
function getImage (imageName) {
    try {
        return require(`@/assets/${imageName}.png`)
    } catch {
        return require('@/assets/logo.png')
    }
}

// 取得錯誤碼訊息
function getErrorMsg (errCode) {
    if (ERRORCODE[errCode]) {
        return ERRORCODE[errCode]
    }
    return 'error'
}
export default {
    debounce,
    resizeError,
    arrObj2gameArrObj,
    gameIds2GameArrObj,
    getImage,
    getErrorMsg
}
