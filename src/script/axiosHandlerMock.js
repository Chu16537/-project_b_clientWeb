
// 登入
function login (request) {
    return new Promise((resolve) => {
        resolve(
            {
                isSuccess: true,
                data: {
                    token: 'success token',
                    imageSkin: ''
                }
            }
        )
    })
}

// 首頁資料
function getHomeData (request) {
    return new Promise((resolve) => {
        resolve(
            {
                isSuccess: true,
                data: {
                    rank: [
                        {
                            nickname: 'nickname_2',
                            totalPay: 109
                        },
                        {
                            nickname: 'nickname_1',
                            totalPay: 109
                        },
                        {
                            nickname: 'nickname_3',
                            totalPay: 109
                        },
                        {
                            nickname: 'nickname_4',
                            totalPay: 109
                        },
                        {
                            nickname: 'nickname_5',
                            totalPay: 105
                        },
                        {
                            nickname: 'nickname_6',
                            totalPay: 104
                        },
                        {
                            nickname: 'nickname_7',
                            totalPay: 103
                        },
                        {
                            nickname: 'nickname_8',
                            totalPay: 102
                        },
                        {
                            nickname: 'nickname_9',
                            totalPay: 101
                        },
                        {
                            nickname: 'nickname_10',
                            totalPay: 100
                        }
                    ]
                }
            }
        )
    })
}

// 會員資料
function getMemberData (request) {
    return new Promise((resolve) => {
        resolve(
            {
                isSuccess: true,
                data: {
                    todayBet: 1,
                    todayPay: 2,
                    totalBet: 3,
                    totalPay: 4
                }
            }
        )
    })
}

function getGameIds (request) {
    return new Promise((resolve) => {
        resolve(
            {
                isSuccess: true,
                data: {
                    gameIds: [1, 2]
                }
            }
        )
    })
}

// 會員資料
function getMemberBetData (request) {
    return new Promise((resolve) => {
        resolve(
            {
                isSuccess: true,
                data: {
                    betHistory: [
                        {
                            timestamp: 1,
                            gameId: 1,
                            betAmount: 100,
                            effectiveBetAmount: 90,
                            payoutAmount: 80,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 2,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 3,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 4,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 5,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 6,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 7,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 8,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 9,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 10,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 11,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        },
                        {
                            timestamp: 12,
                            gameId: 2,
                            betAmount: 50,
                            effectiveBetAmount: 40,
                            payoutAmount: 30,
                            gameResult: {
                                dragon: 101,
                                tiger: 102,
                                winZone: [1, 2, 3],
                                betZone: [100, 200, 300],
                                payZone: [10, 20, 30]
                            }
                        }
                    ]
                }
            }
        )
    })
}

function startGame (request) {
    return new Promise((resolve) => {
        resolve(
            {
                isSuccess: true,
                data: {
                    url: 'https://www.youtube.com/'
                }
            }
        )
    })
}
export default {
    login,
    getHomeData,
    getMemberData,
    getGameIds,
    getMemberBetData,
    startGame
}
