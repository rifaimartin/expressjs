import { Router } from 'express';
import PostService from '../services/post.service';
 
const postService = new PostService();
 
const PostRouter = Router()
  .get('/', async (req, res) => {
    try {
      const data = await postService.findAll();
 
      res.json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const data = await postService.findOne(id);
 
      if ( data ) res.json({ data });
      else res.status(404).json({message: `Post ID ${id} not found.`});
 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .post('/', async (req, res) => {
    try {
      const post = await postService.create(req.body);
 
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await postService.update(id, req.body);
 
      if (!post) res.status(404).json({message: `Post ID ${id} not found.`});
 
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  })
  .delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await postService.delete(id);
 
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  });
 
export default PostRouter;