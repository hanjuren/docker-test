const { User, Post } = require('../../models/index(backup)')

exports.getAllPosts = async (req, res) => {
  try {
    const result = await Post.findAll({
      include: {
        model: User,
        as: 'user',
      },
    });
    const total = result.length;
    console.log(result);
    res.send({ "total": total, "data": result });
  } catch (err) {
    console.log(err.message);
  }
}

exports.createPost = async (req, res) => {
  try {
    console.log(req.body);
    const { title, content } = req.body;
    const result = await Post.create({
      title,
      content,
    });
    console.log(result);
    res.json({ success: true, data: result });
  } catch (e) {
    console.log(e.message);
  }
}