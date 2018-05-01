/* eslint-disable */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var index = require('./routes/index');
var api = require('./routes/api/index');

const mongoose = require('mongoose');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/v1', api)

module.exports = app;
