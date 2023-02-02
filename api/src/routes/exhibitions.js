
const router = require('express').Router();
const axios = require('axios');
const { User, Ticket, Resenia, Guia, Exhibicion, Evento, Donacion, Categoria, Suscripcion } = require('../db');
const { Op } = require("sequelize");
const {preCharge} = require ("../Controllers")



 