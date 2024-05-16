import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send("Sievert media server")
})

app.use('/videos', express.static('videos'))
app.use('/imagenes', express.static('imagenes'))

app.listen(port, ()=>{
  console.log(`App listening on port ${port}`)
})