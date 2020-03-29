require('dotenv').config();

var ISSUER = 'https://dev-918425.okta.com/oauth2/default';
var SPA_CLIENT_ID = '0oa4qxbx4idgq7GDK4x6';
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
