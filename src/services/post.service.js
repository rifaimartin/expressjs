import { getRepository } from "typeorm";
import Post from "../models/post.model";
import UserService from "./user.service";
 
class PostService {
  userService() {
    return new UserService();
  }
 
  postRepository() {
    return getRepository(Post);
  }
 
  async findOne(id) {
    return await this.postRepository().findOne({ where: { id }, relations: ['author'] });
  }
 
  async findAll() {
    return await this.postRepository().find({ relations: ['author'] });
  }
 
  async delete(id) {
    return await this.postRepository().delete(id);
  }
 
  async create(data) {
    const post = this.postRepository().create(data);
    post.author = await this.userService().userRepository().findOne(post.author);
 
    return await this.postRepository().save(post);
  }
 
  async update(id, data) {
    let post = await this.findOne(id);
 
    if (!post) return null;
 
    if (data.author) {
      data.author = await this.userService().userRepository().findOne(data.author);
    }
 
    post = this.postRepository().merge(post, data);
    post.updatedAt = new Date();
    return await this.postRepository().save(post);
  }
}
 
export default PostService;