const router = require('express').Router()
const postController = require('../controllers/postController')
router.post('/',postController.postdata)
router.get('/',postController.getPost)
router.delete('/:id',postController.deletePost)
router.post('/chart',postController.insertData)
router.get('/chart',postController.getChartData)
module.exports = router