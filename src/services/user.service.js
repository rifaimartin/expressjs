import { getRepository } from 'typeorm';
import User from '../models/user.model';

class UserService {
    userRepository(){
        return getRepository(User);
    }

    async findAll(){
        return await this.userRepository().find();
    }

    async createUser(user){
        return await this.userRepository().save(user);
    }

    async findUserById(id) {
        return await this.userRepository().findUserById({ where : { id }});
    }
}

export default UserService;