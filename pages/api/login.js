import withSession from '../../library/session';

export default withSession(async (req, res) => {
  const username = await req.body.username;
  const password = await req.body.password;

  if (username == "mahdi" && password == "32935580") {
    const user = { isLoggedIn: true, username };
    req.session.set('user', user);
    await req.session.save();
    res.status(200).json({ valid: true, user });
  }
  else {
    res.json({ valid: false, message: "not found" });
  }
});
