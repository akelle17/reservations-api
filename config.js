const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

var ISSUER = process.env.ISSUER || 'https://{yourOktaDomain}.com/oauth2/default';
var CLIENT_ID = process.env.CLIENT_ID || '{clientId}';
var CLIENT_SECRET = process.env.CLIENT_SECRET || '{clientSecret}';
var SPA_CLIENT_ID = process.env.SPA_CLIENT_ID || '{spaClientId}';
var OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK ? true : false;

module.exports = {
    resourceServer: {
        port: 8000,
	oidc: {
            clientId: SPA_CLIENT_ID,
            issuer: ISSUER,
            testing: {
                disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
            }
	},
	assertClaims: {
	   aud: 'api://default',
           cid: SPA_CLIENT_ID
       }
    }
};
