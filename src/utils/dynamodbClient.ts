import { DynamoDB, config } from 'aws-sdk';

const isOffline = () => {
  return process.env.IS_OFFLINE;
};

if (isOffline()) {
  config.update({
    region: 'localhost',
    accessKeyId: 'x',
    secretAccessKey: 'x',
  });
}

export const document = new DynamoDB.DocumentClient();
