const { response, request } = require('express')

const userGet = (req = request, res = response) => {
  const {q, nombre = 'noname', apikey} = req.query;

  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey
  })
}

const userPut = (req, res = response ) => {
  const { id } = req.params;

  res.status(200).json({
    msg: 'put API - controller',
    id
  })
}

const userPost = (req, res = response ) => {

  const { nombre, edad} = req.body;

  res.status(201).json({
    msg: 'patch API - controller',
    nombre,
    edad
  })
}

const userPatch = (req, res = response ) => {
  res.status(201).json({
    msg: 'patch API - controller'
  })
}

const userDelete = (req, res = response ) => {
  res.status(201).json({
    msg: 'delete API - controller'
  })
}


module.exports = {
  userGet,
  userPut,
  userPatch,
  userDelete,
  userPost
}
