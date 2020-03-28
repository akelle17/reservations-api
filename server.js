const express = require('express');
const OktaJwtVerfifier = require('@okta/jwt-verifier');
var cors = require('cors');

const config = require('./config.js')

const oktaJwtVerifier({
    clientId: config.resourceServer.oidc.clientId,
    isser: config.resourceServer.oidc.issuer,
    assertClaims: config.resourceServer.assertClaims,
    testing: config.resourceServer.oidc.testing
});

function authenticatedRequired(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);

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

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Success!'
    });
});

app.get('/secure', authenticatedRequired, (req, res) => {
    res.json(req.jwt);
});

app.listen(config.resourceServer.port, () => {
    console.log(`Resource Server Ready on port ${config.resourceServer.port}`);
});