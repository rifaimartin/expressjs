import {EntitySchema} from 'typeorm';
import User from '../../models/user.model';

const UserSchema = new EntitySchema({
    name : 'user',
    target : User,
    tableName : 'users',
    columns: {
        id: {
            primary : true,
            type: 'int',
            generated: true
        },
        username: {
            type : 'varchar',
            unique : true,
            nullable : false,
        },
        email: {
            type : 'varchar',
            nullable : false,
        },
        fullname: {
            type : 'varchar',
            nullable: false,
        }
    }
})

export default UserSchema;