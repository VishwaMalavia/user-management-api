const express = require("express");
const router = express.Router();

let users = [
    { id: 1, name: "John", email: "john@example.com" }
];


// GET all users
router.get("/", (req, res) => {
    res.json(users);
});


// GET single user
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send("User not found");

    res.json(user);
});


// POST new user
router.post("/", (req, res) => {

    const { name, email } = req.body;

    // validation
    if (!name || !email) {
        return res.status(400).send("Name and Email required");
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});


// PUT update user
router.put("/:id", (req, res) => {

    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send("User not found");

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});


// DELETE user
router.delete("/:id", (req, res) => {

    users = users.filter(u => u.id != req.params.id);

    res.send("User deleted");
});

module.exports = router;