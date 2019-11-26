import {EntitySchema} from 'typeorm';
import Post from '../../models/post.model';

const PostSchema = new EntitySchema({
    name : 'user',
    target : Post,
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

export default PostSchema;