import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebrouter from './route/web'
import connectDB from './config/mongodb'

require('dotenv').config()
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
viewEngine(app);
initWebrouter(app);

let port = process.env.PORT || 2222;
app.listen( port ,async	()=> {
	await connectDB()
	console.log('localhost:'+ port)
})
