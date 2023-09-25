const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mitol',
        mongodb_password: '0kQ6UJVhdtT1c8U8',
        mongodb_clustername: 'eventsapp',
        mongodb_database: 'blog-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'mitol',
      mongodb_password: '0kQ6UJVhdtT1c8U8',
      mongodb_clustername: 'eventsapp',
      mongodb_database: 'blog',
    },
  };
};
