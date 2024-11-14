module.exports.sathish = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'sathish',
        input: event,
      },
      {
        message: 'chandu',
        input: event,
      },
            {
        message: 'sai',
        input: event,
      },
      null,
      2
    ),
  };
};
