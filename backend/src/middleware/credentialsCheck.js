const credentialsCheck = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(401)
      .send({ error: "Please specify email and password." });
  }
  return next();
};

module.exports = credentialsCheck;
