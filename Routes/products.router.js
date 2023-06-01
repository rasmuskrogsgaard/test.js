import express from 'express'

const productRouter = express.Router()

productRouter.get('/getproduct', (req, res) => {
    res.send('get ny product')
})

productRouter.post('/postproduct', (req, res) => {
    res.send('post ny product')
})

productRouter.put('/putproduct', (req, res) => {
    res.send('put ny product')
})

productRouter.delete('/deleteproduct', (req, res) => {
    res.send('delete ny product')
})

export { productRouter }