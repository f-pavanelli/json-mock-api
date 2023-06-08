const Api = require('../../../models/Api')
const Mock = require('../../../models/Mock')

const searchMock = async (payload, apiUrl) => {
    try {
        console.log(apiUrl)
        const validAPI = await searchValidAPI(apiUrl)

        if (validAPI.statusCode) return validAPI

        const mockIdentifier = {}

        for (const key of validAPI.identifierKeys) {
            mockIdentifier[key] = payload[key]
        }
        const mock = await Mock.findOne({ api: validAPI._id, requestIdentifier: mockIdentifier })

        if (!mock || mock.length == 0) {
            return {
                statusCode: 404,
                body: {
                    message: "Mock nâo encontrado"
                }
            }
        }

        return { mock }

    } catch (error) {
        return {
            statusCode: 500,
            body: {
                message: "Erro ao consultar o banco de dados"
            }
        }
    }
};


const searchValidAPI = async (apiUrl) => {

    try {
        const api = await Api.findOne({ url: apiUrl })
        if (!api || api.length == 0) {
            return {
                statusCode: 404,
                body: {
                    message: "API nâo encontrada"
                }
            }
        }

        return api

    } catch (error) {
        return {
            statusCode: 500,
            body: {
                message: "Erro ao consultar o banco de dados"
            }
        }
    }

}

module.exports = searchMock;