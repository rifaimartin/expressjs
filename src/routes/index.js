import express from 'express';
import useRouter from './user.route'

export default express.Router()
    .use('/', useRouter);