const Mock = require("../../models/Mock")
const searchMock = require('./functions/searchMock')

const findMock = async (req, res) => {
    try {
        const parameters = req.method == "GET" ? req.query : req.body

        if (!parameters) {
            return res.json({
                statusCode: 400,
                body: {
                    message: 'Parametros faltando'
                }
            })
        }
        const response = await searchMock(parameters, req.params.apiUrl)
        if (response?.statusCode) return res.json(response)

        res.status(response.mock.statusCode)
        res.send({
            statusCode: response.mock.statusCode,
            body: response.mock.response
        })

    } catch (error) {
        res.status(response.mock.statusCode)
        res.send({
            statusCode: 500,
            body: {
                message: error.message
            }
        })
    }

}

module.exports = findMock