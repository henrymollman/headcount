module.exports.ids = {
  facebook : {
    clientID: '1013311812033385',
    clientSecret: '986bbde72290ac76cba8e148a9824713',
    callbackURL: '/auth/facebook-callback'
  },
  google : {
    clientID: '178728119662-uqlqftnb4c33e4afjehj5pssnqcntr6j.apps.googleusercontent.com',
    clientSecret: 'n3x7AR3KRWbyVn0jcG3mcjST',
    callbackURL: '/auth/google-callback'
  },
  amazon : {
    clientID: 'amzn1.application-oa2-client.41832f23ff3f4cc489463b838a0b38bf',
    clientSecret: 'fc043bf694683aae00a0feaca65f086f578d7f8c2adce556a2c94f2bd36e8fe1',
    callbackURL: "/auth/amazon/callback"
  },
  amazonProductsApi: {
    awsId:     'AKIAJRFI5ZD6K5DJBYEA', 
    awsSecret: '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', 
    assocId:   'headcount-20',
    version:   '2013-08-01'
  },
   venmo : {
   clientID: '2623',
   clientSecret: 'CufTMavzWVqx2vkXXtwtwRpvryXxdqdf'
 }
};

// passport.use(new AmazonStrategy({
//     clientID: AMAZON_CLIENT_ID,
//     clientSecret: AMAZON_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/amazon/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ amazonId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));