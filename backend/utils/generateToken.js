import jwt from 'jsonwebtoken';


const generateToken = ( res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn:'30d'
      });
  
      //Set JWT as HTTPOnly Cookie
      res.cookie('jwt', token, {
        htppOnly:true,
        secure: process.env.NODE_ENV !== 'development',
        samesite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 //30 Days, (Days * hours * minutes * seconds * 1000(milliseconds))
      })
}

export default generateToken