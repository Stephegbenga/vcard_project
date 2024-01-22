const express = require('express');
const { parse } = require('url');
const querystring = require('querystring');

const app = express();

const HOST = "" // the url gotten from ngrok
const SHOPIFY_CONFIG = {'API_KEY': '', 'API_SECRET': '', 'APP_HOME': HOST, 'REDIRECT_URI': HOST + '/home', 'SCOPE': 'read_products, read_collection_listings'}

// ====================== Middleware below ================================
function middleware(f) {
  return function decoratedFunction(req, res, next) {
    const referer = req.headers.referer;
    if (!referer) {
      return res.status(401).json({ message: 'unauthorized' });
    }

    const parsedUrl = parse(referer);
    const queryParameters = querystring.parse(parsedUrl.query);

    const shop = queryParameters.shop || 'test_shop';

    req.shop = shop;
    return f(req, res, next);
  };
}

// ====================== Installation route below ================================
app.get('/install', middleware((req, res) => {
  const shop = req.query.shop;
  if (!shop) {
    return res.status(500).send('Error: parameter shop not found');
  }

  const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${SHOPIFY_CONFIG.API_KEY}&redirect_uri=${SHOPIFY_CONFIG.REDIRECT_URI}`;
  return res.redirect(authUrl);
}));


app.get('/home', (req, res) => {
  return res.send('<h2>Welcome to the home page</h2>');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
