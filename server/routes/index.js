import router from ('express').Router();
import path from 'path'
import apiRoutes from './api';

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
