import express from 'express';
import bodyParser from 'body-parser';
import route from './routers/diaryRouters';
import user from './routers/buserRoute';

 
 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', route);
app.use('/', user);


export default app;