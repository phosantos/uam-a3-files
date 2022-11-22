const post_index = async (req, res) => {
  try {
    const [allPosts] = await dbConnection.execute(
      'SELECT id, title, subheading, created_at FROM post',
    );
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const post_details = async (req, res) => {
  const { id } = req.params;

  try {
    const [[postDetail]] = await dbConnection.execute(
      'SELECT * FROM post WHERE id = ?',
      [id],
    );

    if (!postDetail) res.status(404).json({});
    else res.status(200).json(postDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
    res.status(500).json({ error: error.message });
  }
};

const post_delete = async (req, res) => {
  const { id } = req.params;
  try {
    const [{ affectedRows }] = await dbConnection.execute(
      'DELETE FROM post WHERE id = ?',
      [id],
    );
    if (affectedRows === 0)
      res.status(404).json({ success: false, error: 'Post não encontrado' });
    else res.status(200).json({ success: true, deleted_post_id: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const post_update = async (req, res) => {
  const { id } = req.params;
  const { title, subheading, body } = req.body;
  try {
    const [{ affectedRows }] = await dbConnection.execute(
      'UPDATE post SET title = ?, subheading = ?, body = ? WHERE id = ?',
      [title, subheading, body, id],
    );
    if (affectedRows)
      res.status(200).json({ success: true, updated_post_id: id });
    else
      res.status(404).json({ success: false, message: 'Post não encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  post_index,
  post_details,
  post_create,
  post_delete,
  post_update,
};
