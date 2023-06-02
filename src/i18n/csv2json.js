const path = require('path')
const fs = require('fs')
const csvtojson = require('csvtojson')

const csvFilePath = path.join(__dirname, 'lang.csv')
const outputFilePath = path.join(__dirname, 'lang.json')

csvtojson()
    .fromFile(csvFilePath)
    .then(jsonArray => {
        const messages = {}

        // 取得語言列表（第一行）
        const languages = Object.keys(jsonArray[0])

        // 迭代每一列資料
        for (let i = 0; i < jsonArray.length; i++) {
            const translation = jsonArray[i]
            const key = translation.key

            // 迭代每個語言的翻譯內容
            for (let j = 1; j < languages.length; j++) {
                const language = languages[j]
                const translationText = translation[language]

                if (!messages[language]) {
                    messages[language] = {}
                }

                messages[language][key] = translationText
            }
        }

        // 將結果輸出為 JSON 檔案
        fs.writeFile(outputFilePath, JSON.stringify(messages, null, 2), (error) => {
            if (error) {
                console.error('Error writing output file:', error)
            } else {
                console.log('Conversion completed successfully.')
            }
        })
    })
    .catch(error => {
        console.error('Error converting CSV to JSON:', error)
    })
