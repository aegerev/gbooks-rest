import router from ('express').Router();
import {createUser, getSingleUser, saveBook, deleteBook, login} from '../../controllers/user-controller';
import authMiddleware from '../../utils/auth.js';

router.route('/').post(createUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

routerRoute('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
