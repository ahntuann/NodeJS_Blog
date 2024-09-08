import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars';
import hbs from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path'

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'))

// Template engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})