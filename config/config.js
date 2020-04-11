require('dotenv').config();

var ISSUER = process.env.ISSUER;
var SPA_CLIENT_ID = process.env.SPA_CLIENT_ID;
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
