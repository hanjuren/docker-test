const { User, Post } = require('../../models')

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