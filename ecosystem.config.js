module.exports = {
  apps: [
    {
      name: "Dev_NextJs",
      script: "npm run start",
      env: {
        PORT: process.env.DEVELOPMENT_PORT,
      },
      env_production: {
        PORT: process.env.PRODUCTION_PORT,
      },
    },
  ],
};
