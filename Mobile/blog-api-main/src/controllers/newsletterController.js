const newsletter_post = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await dbConnection.execute(
      'INSERT INTO newsletter (name, email) VALUES (?,?)',
      [name, email],
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { newsletter_post };
