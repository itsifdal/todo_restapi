module.exports = app => {
    const todo = require("../controllers/todo.controller.js");

    let router = require("express").Router();
    
    // Retrieve all todo
    router.get("/", todo.findAll);
    
    // Create a new post
    router.post("/", todo.create);

    // Retrieve single post
    router.get("/:id", todo.findOne);

    // Update post
    router.patch("/:id", todo.update);

    // Delete single post
    router.delete("/:id", todo.delete);


    app.use("/todo-items", router);
}