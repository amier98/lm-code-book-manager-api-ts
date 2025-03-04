import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";

export class Book extends Model<
	InferAttributes<Book>,
	InferCreationAttributes<Book>
> {
	declare bookID: CreationOptional<number>;
	declare title: string;
	declare author: string;
	declare description: string;
}

Book.init(
	{
		bookID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		modelName: "Book",
		timestamps: false,
		sequelize: sequelize,
	}
);
