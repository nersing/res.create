module.exports = function (sequelize, DataTypes){

    var education = sequelize.define('education', {
        School_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Degree: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Graduation_Date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    education.associate = function(models) {
        education.hasMany(models.Resume, {
            onDelete: 'cascade'
        });
    };

    return education;
}