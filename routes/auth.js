const OktaJwtVerifier = require('@okta/jwt-verifier');

const config = require('../config/config');

const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: config.resourceServer.oidc.clientId,
    issuer: config.resourceServer.oidc.issuer,
    assertClaims: config.resourceServer.assertClaims,
    testing: config.resourceServer.oidc.testing
  });

exports.authenticatedRequired = (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);

    // if (process.env.NODE_ENV === 'development') {
    //     return next();
    // }

    if (!match) {
        res.status(401);
        return next('Unauthorized');
    }

    const accessToken = match[1];
    const audience = config.resourceServer.assertClaims.aud;
    
    return oktaJwtVerifier.verifyAccessToken(accessToken, audience)
        .then((jwt) => {
            req.jwt = jwt;
            next();
        })
        .catch((err) => {
            res.status(401).send(err.message);
        });
}