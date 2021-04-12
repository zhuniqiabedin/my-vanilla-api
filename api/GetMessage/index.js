module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Hello from the API"
      }
    };
    const connectionString = process.env.DATABASE_CONNECTION_STRING;
  };