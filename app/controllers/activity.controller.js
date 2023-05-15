const db  = require("../models");
const Activity = db.activities;
const Op = db.Sequelize.Op;


// Get all activitys
exports.findAll = async (req, res) => {
    try {
      const data = await Activity.findAll();
      res.send({
        status:"Success",
        message:"Success",
        data: data
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Get a specific activity
exports.findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Activity.findByPk(id);
      if (data) {
        res.send({
            status:"Success",
            message:"Success",
            data: data
        });
      }else{
        res.status(404).json({ error: 'Activity Item Not Found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
// Create a activity
exports.create = async (req, res) => {
    try {
      const { title, email} = req.body;
      const data = await Activity.create({ title, email });
      res.send({
        status:"Success",
        message:"Success",
        data: data
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


// Update a activity
exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, email } = req.body;
  
      const activity = await Activity.findByPk(id);
      
      if (activity) {
        const updatedData = await Activity.update(
          { title, email },
          { where: { id } }
        );
  
        if (updatedData[0] === 1) {
          // activity item was updated successfully
          const data = await Activity.findByPk(id);
          res.send({
            status:"Success",
            message:"Success",
            data: data
          });
        }else{
          res.status(404).json({ error: 'activity not found' });
        }
      }else{
        res.status(404).json({ error: 'activity not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


// Delete a activity
exports.delete = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Activity.findByPk(id);
      if (data) {
        data.destroy();
        res.send({
            status:"Success",
            message:"Success",
            data: data
        });
      }else{
        res.status(404).json({ error: 'activity not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

