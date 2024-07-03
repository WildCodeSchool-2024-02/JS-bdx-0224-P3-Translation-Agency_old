const JwtStrategy = require("passport-jwt").Strategy;
const {ExtractJwt} = require("passport-jwt");
const passport = require("passport");
const  client= require("../../database/client"); // Replace with your MySQL database configuration



const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey;

passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
      const [user] = await client.query(
        "SELECT id, user_name, email,role FROM users WHERE id = ?",
        [jwtPayload.id]
      );

      if (user) {
        return done(null, user);
      } 
        return done(null, false);
    
    } catch (err) {
      return done(err, false);
    }
  })
);

const isAuth = () => passport.authenticate("jwt", { session: false });

module.exports = isAuth;