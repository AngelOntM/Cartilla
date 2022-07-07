import app from './app.js'

app.listen(process.env.PORT || PORT)
console.log('Server listening on port', app.get('port'))