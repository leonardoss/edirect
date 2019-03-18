import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const router = require('./routes/routes.js');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src'));
app.use(express.static(path.join(__dirname, '../src')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
mongoose.connect(
  'mongodb://propellerhead_user:Pr0p3113r2018@ds031845.mlab.com:31845/propellerhead_db',
  { useNewUrlParser: true }
);
app.use('/', router);

module.exports = app;
