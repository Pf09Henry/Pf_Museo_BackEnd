const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const exhibitionsRoute = require('./exhibitions') // exhibiciones
const eventsRoute = require('./events') // eventos
const usersRoute = require('./users') // usuarios
const adminsRoute = require('./admins') // administradores
const userRoute = require('./user') // usuario


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/exhibitions', exhibitionsRoute); // ruta de exhibiciones
router.use('/events', eventsRoute); // ruta de eventos
router.use('/users', usersRoute); // ruta de usuarios
router.use('/admins', adminsRoute); // ruta de administradores
router.use('/user', userRoute); // ruta de usuario


module.exports = router;