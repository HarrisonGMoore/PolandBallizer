export default (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		username: {
			type: Sequelize.STRING(20),
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING(40),
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING(40),
			allowNull: false,
		},
		numOfComics: {
			type: Sequelize.INTEGER(),
			allowNull: true,
			default: 0
		}
	}, {
		tableName: "user",
		freezeTableName: true
	});

	User.associate = (models) => {
		User.hasMany(models.user, {
			foreignKey: 'userID'
		});
	}

	return User;
}