module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    console.log("req", req);
    console.log("res", res);
    if (req.body.username === "aaa" && req.body.password === "123123") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res
        .status(400)
        .json({ message: "Username or password is not correct!" });
    }
  }
  next();
};
