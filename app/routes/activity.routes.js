module.exports = app => {
    const activity = require("../controllers/activity.controller.js");

    let router = require("express").Router();
    
    // Retrieve all activity
    router.get("/", activity.findAll);
    
    // Create a new post
    router.post("/", activity.create);

    // Retrieve single post
    router.get("/:id", activity.findOne);

    // Update post
    router.patch("/:id", activity.update);

    // Delete single post
    router.delete("/:id", activity.delete);


    app.use("/activity-groups", router);
}