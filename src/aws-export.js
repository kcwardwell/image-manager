const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "art-bucket-ecs-dev",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://er3kvoculk.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_yVkXMQYHJ",
        APP_CLIENT_ID: "69nt2noe0v3bkj0eq47t2h4lpq",
        IDENTITY_POOL_ID: "us-east-1:85d32767-d718-418a-805c-0e4e1f494e59",
    },
  };
  
  export default config;