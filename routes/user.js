const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/API")
	.get(userController.findUsers)

router.route("/signup")
	.post(userController.createNewUser);


router.route("/usercomics/:id")
	.get(userController.findAllComics)
	.delete(userController.deleteComic);
router.route("/createcomic/")
	.post(userController.createComic)
router.route("/createcomic/:id")
	.get(userController.findComicByID)
	.put(userController.updateComic)
router.route("/createcomic/:id" || "/createcomic")
	.get(userController.findPanel)
	.post(userController.createPanel)
	.put(userController.updatePanel)
	.delete(userController.deletePanel);


module.exports = router;


