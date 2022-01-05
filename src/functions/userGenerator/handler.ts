import { SNSEvent } from 'aws-lambda';

const userGenerator = async (event: SNSEvent) => {
  try {
    await generateUser(event);
  } catch (e) {
    console.error('Error generating user: ', e);
    throw e;
  }
};

export const main = userGenerator;
