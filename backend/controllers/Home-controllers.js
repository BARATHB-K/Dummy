const Home = require("../model/HomeUser");
const WorkHc = require("../model/WorkUserHc");
const Work = require("../model/WorkUser");
const WorkHp = require("../model/WorkUserHp");
const WorkP = require("../model/WorkUserP");
const WorkA = require("../model/WorkUserA");
const WorkPest = require("../model/WorkUserPest");
const bcrypt = require("bcryptjs");

const Confirm_W = require("../model/Confirm");

const jwt = require("jsonwebtoken");


const JWT_SECRET =
    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]ponnnnnu89ywe";

const getAllUser = async (req, res, next) => {
    let home;
    try {
        home = await Home.find();
    } catch (err) {
        console.log(err);
    }

    if (!home) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ home });
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
};

const addUser = async (req, res, next) => {
    const { name, email, address, phoneno, password } = req.body;
    // const encryptedPassword = await bcrypt.hash(password, 10);

    let home;//book
    try {

        const oldUser = await Home.findOne({ email });

        if (oldUser) {
            return res.json({ error: "User Exists" });
        }
        home = new Home({
            name,
            email,
            address,
            phoneno,
            password: encryptedPassword,
        });
        await home.save();
    } catch (err) {
        console.log(err);
    }

    if (!home) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ home });
};

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, address, phoneno, password } = req.body;
    let home;
    try {
        home = await Home.findByIdAndUpdate(id, {
            name,
            email,
            address,
            phoneno,
            password,
        });
        home = await home.save();
    } catch (err) {
        console.log(err);
    }
    if (!home) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ home });
};

/*const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
};*/

const addwork = async (req, res, next) => {
    const { name, email, phoneno, image, address, city, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let work;//book

    try {
        work = new Work({
            name,
            email,
            phoneno,
            image,
            address,
            city,
            password: encryptedPassword,
        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};

const addworkHc = async (req, res, next) => {
    const { name, email, phoneno, image, address, city, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let work;//book

    try {
        work = new WorkHc({
            name,
            email,
            phoneno,
            image,
            address,
            city,
            password: encryptedPassword,
        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};

const addworkHp = async (req, res, next) => {
    const { name, email, phoneno, image, address, city, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let work;//book

    try {
        work = new WorkHp({
            name,
            email,
            phoneno,
            image,
            address,
            city,
            password: encryptedPassword,
        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};

const addworkP = async (req, res, next) => {
    const { name, email, phoneno, image, address, city, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let work;//book

    try {
        work = new WorkP({
            name,
            email,
            phoneno,
            image,
            address,
            city,
            password: encryptedPassword,
        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};

const addworkA = async (req, res, next) => {
    const { name, email, phoneno, image, address, city, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let work;//book

    try {
        work = new WorkA({
            name,
            email,
            phoneno,
            image,
            address,
            city,
            password: encryptedPassword,
        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};

const addworkPest = async (req, res, next) => {
    const { name, email, phoneno, image, address, city, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let work;//book

    try {
        work = new WorkPest({
            name,
            email,
            phoneno,
            image,
            address,
            city,
            password: encryptedPassword,
        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};



const getAllVendors = async (req, res, next) => {
    let work;
    try {
        work = await Work.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};

const getAllVendorsHc = async (req, res, next) => {
    let work;
    try {
        work = await WorkHc.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};

const getAllVendorsHp = async (req, res, next) => {
    let work;
    try {
        work = await WorkHp.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};

const getAllVendorsP = async (req, res, next) => {
    let work;
    try {
        work = await WorkP.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};
const getAllVendorsA = async (req, res, next) => {
    let work;
    try {
        work = await WorkA.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};
const getAllVendorsPest = async (req, res, next) => {
    let work;
    try {
        work = await WorkPest.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};
const siginuser = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await Work.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });


};

const siginuserPest = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await WorkPest.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });


};

const siginuserHp = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await WorkHp.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });


};

const siginuserHc = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await WorkHc.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });


};

const siginuserP = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await WorkP.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });


};

const siginuserA = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await WorkA.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });


};

const userData = async (req, res, next) => {

    const { token } = req.body;
    try {
        const user2 = jwt.verify(token, JWT_SECRET);
        console.log(user2);

        const useremail = user2.email;
        Work.findOne({ email: useremail })
            .then((data) => {
                res.send({ status: "ok", data: data });
            })
            .catch((error) => {
                res.send({ status: "error", data: error });
            });
    } catch (error) { }


};


const getByIdPhoneno = async (req, res, next) => {
    const id = req.params.id;
    let work;
    try {
        work = await Work.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!work) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ work });
};
const getByIdPhonenoHc = async (req, res, next) => {
    const id = req.params.id;
    let work;
    try {
        work = await WorkHc.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!work) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ work });
};
const getByIdPhonenoHP = async (req, res, next) => {
    const id = req.params.id;
    let work;
    try {
        work = await WorkHp.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!work) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ work });
};

const getByIdPhonenoP = async (req, res, next) => {
    const id = req.params.id;
    let work;
    try {
        work = await WorkP.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!work) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ work });
};
const getByIdPhonenoA = async (req, res, next) => {
    const id = req.params.id;
    let work;
    try {
        work = await WorkA.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!work) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ work });
};

const getByIdPhonenoPest = async (req, res, next) => {
    const id = req.params.id;
    let work;
    try {
        work = await WorkPest.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!work) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ work });
};


//CONFIRMATION
const w_Confirm = async (req, res, next) => {
    const { name, email, phoneno, date, time, address } = req.body;

    let work;//book

    try {
        work = new Confirm_W({
            name,
            email,
            phoneno,
            date,
            time,
            address,

        });
        await work.save();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ work });
};

const getAllConfirmation = async (req, res, next) => {
    let work;
    try {
        work = await Confirm_W.find();
    } catch (err) {
        console.log(err);
    }

    if (!work) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ work });
};

// const getByEmail = async (req, res, next) => {
//     const email = req.params.email;
//     let work;
//     try {
//         work = await Confirm_W.findById(email);
//     } catch (err) {
//         console.log(err);
//     }
//     if (!work) {
//         return res.status(404).json({ message: "No Book found" });
//     }
//     return res.status(200).json({ work });
// };

// const getByEmail1 = async (req, res, next) => {

//     const { email } = req.body;
//     let work;

//     try {
//         work = await Confirm_W.findByEmail({ email });
//     } catch (err) {
//         console.log(err);
//     }
//     if (!work) {
//         return res.status(404).json({ message: "No jbhj found" });
//     }
//     return res.status(200).json({ work });
// };

// DElete 

const deleteOrders = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Confirm_W.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
};




exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
//exports.deleteBook = deleteBook;
exports.addwork = addwork;
exports.getAllVendors = getAllVendors;

exports.siginuser = siginuser;
exports.siginuserPest = siginuserPest;
exports.siginuserHp = siginuserHp;
exports.siginuserHc = siginuserHc;
exports.siginuserP = siginuserP;
exports.siginuserA = siginuserA;

exports.userData = userData;

exports.getByIdPhoneno = getByIdPhoneno;
exports.getByIdPhonenoPest = getByIdPhonenoPest;
exports.getByIdPhonenoHc = getByIdPhonenoHc;
exports.getByIdPhonenoHp = getByIdPhonenoHP;
exports.getByIdPhonenoP = getByIdPhonenoP;
exports.getByIdPhonenoA = getByIdPhonenoA;

exports.addworkHc = addworkHc;
exports.getAllVendorsHc = getAllVendorsHc;

exports.addworkHp = addworkHp;
exports.getAllVendorsHp = getAllVendorsHp;

exports.addworkP = addworkP;
exports.getAllVendorsP = getAllVendorsP;

exports.addworkA = addworkA;
exports.getAllVendorsA = getAllVendorsA;

exports.addworkPest = addworkPest;
exports.getAllVendorsPest = getAllVendorsPest;

exports.w_Confirm = w_Confirm;

exports.getAllConfirmation = getAllConfirmation;

// exports.getByEmail1 = getByEmail1;

exports.deleteOrders = deleteOrders;

