const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.cookie( "Test", "1234", { httpOnly: 'true', maxAge: "30000", sameSite: 'lax',} )
    res.cookie( "NewTest", "22222", { httpOnly: true, sameSite: 'none', secure: true, maxAge: '30000'} )
    return res.redirect(process.env.REDIRECT_URL)
})

app.listen(3000, () => {
    console.log("Listening");
} )