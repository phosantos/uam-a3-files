const post_index = async (req, res) => {
  const [allPosts] = await dbConnection.execute('SELECT * FROM post');
  res.status(200).json(allPosts);
};

const post_details = async (req, res) => {
  const { id } = req.params;
  const [[postDetail]] = await dbConnection.execute(
    'SELECT * FROM post WHERE id = ?',
    [id],
  );

  if (!postDetail) res.status(404).json({});
  else res.status(200).json(postDetail);
};

const post_create = async (req, res) => {
  try {
    const { title, subheading, body } = req.body;
    const [{ insertId }] = await dbConnection.execute(
      'INSERT INTO post (title, subheading, body) VALUES (?,?,?)',
      [title, subheading, body],
    );
    res.status(200).json({ success: true, new_post_id: insertId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const post_delete = async (req, res) => {
  const { id } = req.params;
  const [{ affectedRows }] = await dbConnection.execute(
    'DELETE FROM post WHERE id = ?',
    [id],
  );
  if (affectedRows === 0) res.status(404).json({ error: 'Invalid id' });
  else res.status(200).json({ success: true, deleted_post_id: id });
};

module.exports = { post_index, post_details, post_create, post_delete };
