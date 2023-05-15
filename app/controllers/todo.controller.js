const db  = require("../models");
const Todo = db.todos;
const Op = db.Sequelize.Op;

// Get all todos
exports.findAll = async (req, res) => {
    try {
      const data = await Todo.findAll();
      res.send({
        status:"Success",
        message:"Success",
        data: data
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Get a specific todo
exports.findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Todo.findByPk(id);
      if (data) {
        res.send({
            status:"Success",
            message:"Success",
            data: data
        });
      }else{
        res.status(404).json({ error: 'todo Item Not Found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
// Create a todo
exports.create = async (req, res) => {
    try {
      const { activity_group_id, title, priority, is_active } = req.body;
      const data = await Todo.create({ activity_group_id, title, priority, is_active });
      res.send({
        status:"Success",
        message:"Success",
        data: data
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


// Update a todo
exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { activity_group_id, title, priority, is_active } = req.body;
  
      const todo = await Todo.findByPk(id);
      
      if (todo) {
        const updatedData = await Todo.update(
          { activity_group_id, title, priority, is_active },
          { where: { id } }
        );
  
        if (updatedData[0] === 1) {
          // todo item was updated successfully
          const data = await Todo.findByPk(id);
          res.send({
            status:"Success",
            message:"Success",
            data: data
          });
        }else{
          res.status(404).json({ error: 'todo not found' });
        }
      }else{
        res.status(404).json({ error: 'todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


// Delete a todo
exports.delete = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Todo.findByPk(id);
      if (data) {
        data.destroy();
        res.send({
            status:"Success",
            message:"Success",
            data: data
        });
      }else{
        res.status(404).json({ error: 'todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

