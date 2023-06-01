import express  from 'express'

const postRouter = express.Router()

postRouter.get('/get', (req, res) => {
    res.send('opret ny get')
})

postRouter.post('/post', (req, res) => {
    res.send('opret ny post')
})

postRouter.put('/put', (req, res) => {
    res.send('opret ny put')
})

postRouter.delete('/delete', (req, res) => {
    res.send('opret ny delete')
})



export { postRouter }