import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      url: process.env.POSTGRES_URL,
    },
    jwt: {
      secret: process.env.JWT_MODULE_KEY,
      expirationTime: process.env.JWT_EXPIRATION_TIME,
    },
  };
});
