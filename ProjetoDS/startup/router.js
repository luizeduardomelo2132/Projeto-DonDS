const express = require('express');
const personRoutes = require('../src/routes/person');
const jogosRoutes = require('../src/routes/jogos');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personRoutes);
    app.use('/apo', jogosRoutes);
};