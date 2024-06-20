import jwt from "jsonwebtoken";

export default function (req, res, next) {
  // const token = req.headers.access_token;

  // if (!token) {
  //   return res.status(401).json({ message: "Access denied" });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = decoded;
  //   next();
  // } catch (error) {
  //   res.status(400).json({ message: "Invalid token" });
  // }
  const token = req.headers.access_token || req.headers.authorization?.split(' ')[1]; // handle Bearer token if needed
  if (!token) {
    console.log('Access token is missing or invalid');
    return res.status(UNAUTHORIZED).send({ message: 'Access token is missing or invalid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('User ID:', req.user.id); // Add logging here
    next();
  } catch (error) {
    console.log('Invalid token', error);
    res.status(UNAUTHORIZED).send({ message: 'Invalid token' });
  }
};
