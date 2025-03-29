const Property = require('../models/Property');

const propertyPage = async (req, res) => {
    try {
        const properties = await Property.find(); 
        res.render("index", { properties }); 
    } catch (error) {
        console.error("Error fetching properties:", error);
        res.status(500).send("Internal Server Error");
    }
};

//add
const addProperty = async (req, res) => {
    try {
        const { title, description, price, imageUrl } = req.body;
        const newProperty = new Property({ title, description, price, imageUrl });

        await newProperty.save();
        res.redirect("/"); 
    } catch (error) {
        console.error("Error adding property:", error);
        res.status(500).send("Internal Server Error");
    }
};

//delete
const deleteProperty = async (req, res) => {
    const id = req.query.id;
    await Property.findByIdAndDelete(id);
    res.redirect('/');
};

//update
const updateProperty = async (req, res) => {
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
};

//edit
const editProperty = async (req, res) => {
    const id = req.params.id;
    const updateData = {
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        type: req.body.type,
    };

    if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`; 
    }

    await Property.findByIdAndUpdate(id, updateData);
    res.redirect('/');
};


module.exports = {
    propertyPage,
    addProperty,
    deleteProperty,
    updateProperty,
    editProperty
};
