const express = require("express");
const router = express.Router();
const Home = require("../model/HomeUser");
const Work = require("../model/WorkUser");
const HomeController = require("../controllers/Home-controllers");



router.post("/", HomeController.addUser);
//router.get("/:id", booksController.getById);
router.put("/:id", HomeController.updateUser);
//router.delete("/:id", booksController.deleteBook);

router.post("/work", HomeController.addwork);

router.get("/vendor", HomeController.getAllVendors);

router.get("/orders/:id", HomeController.getByIdPhoneno);
router.get("/ordersPest/:id", HomeController.getByIdPhonenoPest);
router.get("/ordersHc/:id", HomeController.getByIdPhonenoHc);
router.get("/ordersHp/:id", HomeController.getByIdPhonenoHp);
router.get("/ordersP/:id", HomeController.getByIdPhonenoP);
router.get("/ordersA/:id", HomeController.getByIdPhonenoA);

router.get("/add/:id", HomeController.getByIdPhoneno);

router.post("/sigin", HomeController.siginuser);
router.post("/siginPest", HomeController.siginuserPest);
router.post("/siginHp", HomeController.siginuserHp);
router.post("/siginHc", HomeController.siginuserHc);
router.post("/siginP", HomeController.siginuserP);
router.post("/siginA", HomeController.siginuserA);

router.post("/userData", HomeController.userData);

router.post("/workHc", HomeController.addworkHc);
router.get("/vendorHc", HomeController.getAllVendorsHc);

router.post("/workHp", HomeController.addworkHp);
router.get("/vendorHp", HomeController.getAllVendorsHp);

router.post("/workP", HomeController.addworkP);
router.get("/vendorP", HomeController.getAllVendorsP);

router.post("/workA", HomeController.addworkA);
router.get("/vendorA", HomeController.getAllVendorsA);

router.post("/workPest", HomeController.addworkPest);
router.get("/vendorPest", HomeController.getAllVendorsPest);

router.post("/confirm", HomeController.w_Confirm);
router.get("/confirmAllOreders", HomeController.getAllConfirmation);

//router.post("/confirm/email", HomeController.getByEmail1);

router.delete("/confirmDelete/:id", HomeController.deleteOrders);

module.exports = router;


// {
//     "name": "Plpl",
//     "email":"Pest@gmail.com",
//     "phoneno": "9994775079",
//      "date":"03/04/2017",
//      "time":"12:45",
//     "address": "vfbcccvbfvjvf"
     
// }