const app = require('./app');
require('./infra/database');

const port = process.env.PORT || 3001;

app.listen(port, () => {    
    console.log(`Running on ${port}...`);
})