module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("Todo", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        activity_group_id:{
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING(30)
        },
        priority: {
            type: Sequelize.ENUM('very-high', 'high', 'medium', 'low', 'very-low'),
            defaultValue: 'medium'
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
    });

    return Todo;
}