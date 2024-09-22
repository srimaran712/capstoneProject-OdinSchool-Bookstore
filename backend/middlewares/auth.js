const jwt =require('jsonwebtoken')


const authenticateJWT= async(req,res,next)=>{
    const authHeader = req.headers.authorization;
 
        // authHeader should be in the format "Bearer <token>"
    
  //  try {
    //    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify token using the secret key
    //    req.user = decoded; // Attach decoded user data to request object
     //   next(); // Move to the next middleware/route handler
   // } catch (error) {
       // res.status(403).json({ message: 'Invalid Token' });
   // }
   if (authHeader) {
    // authHeader should be in the format "Bearer <token>"
    const token = authHeader.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next(); // Proceed to the next middleware or route handler
        });
    } else {
        return res.status(401).json({ message: 'Token missing' });
    }
} else {
    return res.status(401).json({ message: 'Authorization header missing' });
}
   
}

module.exports={authenticateJWT}