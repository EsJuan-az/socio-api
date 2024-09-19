import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import User from './user.model'; // Asegúrate de que la ruta sea correcta

@Table({ tableName: 'businesses', timestamps: true })
export default class Business extends Model<Business> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4, 
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: 'NIT',
  })
  nit!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'owner_id'
  })
  ownerId!: string;

  @BelongsTo(() => User, { foreignKey: 'owner_id' })
  owner!: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'placeholder',
    field: 'picture_url',
  })
  pictureUrl!: string;

  @CreatedAt
  @Column({
    field: 'created_at',
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt!: Date;
}
