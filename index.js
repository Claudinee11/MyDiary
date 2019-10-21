import bodyParser from 'body-parser';
import route from './server/routers/diaryRouters';
import user from './server/routers/buserRoute';



 const express = require('express');
 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', route);
app.use('/', user);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;