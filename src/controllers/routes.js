const { Router } = require('express')
const express = require('express')
const findMock = require('./findMock/index')


const routes = express.Router()

routes.all('/findMock/:apiUrl', findMock)

module.exports = routes