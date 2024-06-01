module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
    contentSecurityPolicy: {
    useDefaults: true,
    directives: {
    "script-src": ["self", "https:", "http:localhost:3000"],
    "frame-src": ["self", "https:", "http:localhost:3000"],
    "frame-ancestors": ["self", "https:", "http:localhost:3000"],
    },
    },
    }
    },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


