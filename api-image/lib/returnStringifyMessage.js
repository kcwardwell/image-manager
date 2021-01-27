export function stringifyMessage (status,msg)  {
    const response = {
        statusCode: status,
        body: JSON.stringify(
          {
            message: msg           
          }
        ),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
          /* ,
          "Access-Control-Allow-Credentials": true, */
        }
      };
    return response
}