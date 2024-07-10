import router from ('express').Router();
import userRoutes from './user-routes.js'

router.use('/users', userRoutes);

module.exports = router;