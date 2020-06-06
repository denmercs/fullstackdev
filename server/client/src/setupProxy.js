const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/google", { target: "http://localhost:5000/" })
  );
  app.use(
    createProxyMiddleware("/api/*", { target: "http://localhost:5000/" })
  );
  app.use(
    createProxyMiddleware("/api/stripe", { target: "http://localhost:5000/" })
  );
  app.use(
    createProxyMiddleware("/api/surveys", { target: "http://localhost:5000/" })
  );
};
