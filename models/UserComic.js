export default (sequelize, Sequelize) => {
	const Comic = sequelize.define("comic", {
		comicName: {
			type: Sequelize.STRING(40),
			allowNull: true,
		},
		numOfPanels: {
			type: Sequelize.INTEGER(),
            allowNull: true,
            default: 0
		}
	}, {
		tableName: "comic",
		freezeTableName: true
	});


	Comic.associate = (models) => {
		Comic.belongsTo(models.user, {
			foreignKey: 'userID'
		});
		Comic.hasMany(models.user, {
			foreignKey: 'comicNum'
		});
    }
}