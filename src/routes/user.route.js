import {Router} from 'express';
import { UserService } from '../services';


const userService = new UserService();
const UserRouter = Router()
    .get('/users', async ( req, res)=>{
        try {
            const users = await userService.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })
    .post('/user', async ( req, res)=>{
        try {
            let user = {...req.body};
            user = await userService.createUser(user);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })
    .get('/user/:id', async ( req, res)=>{
        try {
            const { id } = req.param;
            const user = await userService.findUserById(id);

            if (user) res.json(user);
            else res.status(404).json({ message : `User ID ${id} not found.`});
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })

export default UserRouter;