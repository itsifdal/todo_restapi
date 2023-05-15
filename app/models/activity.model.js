module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("Activity", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING(30)
        },
        email: {
            type: Sequelize.STRING(50)
        }
    });

    return Activity;
}