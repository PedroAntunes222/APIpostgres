const app = require('./src/app');
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('O server está funcionando na porta ' + port);
});