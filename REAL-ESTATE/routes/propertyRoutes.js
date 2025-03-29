const express = require('express');
const multer = require('multer');
const path = require('path'); 
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const Property = require('../models/Property'); 

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/add-property", upload.single("image"), async (req, res) => {
    try {
        const { title, price, location, type } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null; 

        if (!title || !price || !location || !type || !image) {
            return res.status(400).send("All fields including image are required!");
        }

        const newProperty = new Property({ title, price, location, type, image });

        await newProperty.save();
        res.redirect("/");
    } catch (error) {
        console.error("Error adding property:", error);
        res.status(500).send("Error adding property");
    }
});

router.post("/delete/:id", async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.redirect("/"); 
    } catch (error) {
        res.status(500).send("Error deleting property");
    }
});

router.get('/update/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).send("Property not found");
        }
        res.render('updateProperty', { property });
    } catch (error) {
        console.error("Error fetching property:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.post('/update/:id', upload.single("image"), async (req, res) => {
    try {
        const { title, price, location, type } = req.body;
        const updatedData = { title, price, location, type };

            if (req.file) {
            updatedData.image = `/uploads/${req.file.filename}`;
        }

        await Property.findByIdAndUpdate(req.params.id, updatedData);
        res.redirect('/'); 
    } catch (error) {
        console.error("Error updating property:", error);
        res.status(500).send("Error updating property");
    }
});

//router.get("/", propertyPage); 
router.get('/', propertyController.propertyPage);
router.post("/add-property", propertyController.addProperty);
router.post('/delete', propertyController.deleteProperty);
router.post('/update/:id', propertyController.updateProperty);
router.post('/edit/:id', propertyController.editProperty);

module.exports = router;
