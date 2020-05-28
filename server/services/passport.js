const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleId: profile.id,
      })
        .then((existingUser) => {
          if (existingUser) {
            // we already have that user
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID, make a new record
            /** GOOGLE USER PROFILE */
            new User({ googleId: profile.id }).save().then((user) => {
              done(null, user);
            });
          }
        })
        .catch((err) => done(err, null));
    }
  )
);
