export default (sequelize, Sequelize) => {
	const Panel = sequelize.define("panel", {
		panelNum: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		panelHTMLInfo: {
			type: Sequelize.BLOB,
			allowNull: true,
		}
	}, {
		tableName: "panel",
		freezeTableName: true
	});


	Panel.associate = (models) => {
		Panel.belongsTo(models.comic, {
			foreignKey: 'comicNum'
		});
    }
}