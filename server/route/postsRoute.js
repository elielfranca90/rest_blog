const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/post', async function (req, res) {
    const posts = await postsService.getPosts();
    res.json(posts);
});

router.get('/post/:id', async function (req, res) {});

router.post('/post', async function (req, res) {});

router.put('/post/:id', async function (req, res) {});

router.delete('/post/:id', async function (req, res) {});

module.exports = router;