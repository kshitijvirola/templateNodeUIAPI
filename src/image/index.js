const express = require("express");
const router = express.Router();
const Post = require("./model");

// Get all data
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();console.log("gvsdf",Post,posts);
    res.json({ ResponseCode: 200, length: posts.length, data: posts });
  } catch (error) {
    res.json({ message: error, ResponseCode: 400 });
  }
});
// Add data
router.post("/add", async (req, res) => {
  try {
    var savePost;
    req.body.forEach(async (a) => {
      let find = await Post.find({UNIQUE_QUERY_ID:a.UNIQUE_QUERY_ID});      
      if (find.length === 0) {
        const post1 = new Post({
          UNIQUE_QUERY_ID:a.UNIQUE_QUERY_ID,
          QUERY_TYPE:a.QUERY_TYPE,
        });
        savePost = await post1.save();
      }
    });
    res.json({ data: savePost, ResponseCode: 200 });
  } catch (error) {
    res.json({ message: error, ResponseCode: 400 });
  }
});
// Get data by id
router.get("/:postId", async (req, res) => {
  try {
    const post2 = await Post.findById(req.params.postId);
    res.json({length: post2.length, ResponseCode: 200, data: post2 });
  } catch (error) {
    res.json({ message: error, ResponseCode: 400 });
  }
});
// Delete data
router.delete("/delete/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json({ data: removePost, ResponseCode: 200 });
  } catch (error) {
    res.json({ message: error, ResponseCode: 400 });
  }
});
module.exports = router;
