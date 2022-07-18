import { SecretsManager } from 'aws-sdk';
import { BullhornCredentials } from 'src/model/BullhornCredentials';
import { HackerRankSecrets } from 'src/model/HackerRankSecrets';
import { HelloSignCredentials } from 'src/model/HelloSignCredentials';
import { MicrosoftCredentials } from 'src/model/MicrosoftCredentials';
import { SalesforceCredentials } from 'src/model/SalesforceCredentials';
import { SquareSpaceCredentials } from 'src/model/SquareSpaceCredentials';
import { ZoomCredentials } from 'src/model/ZoomCredentials';

export const getBullhornSecrets = async (): Promise<BullhornCredentials> => {
  const secretPath = 'smoothstack/bullhorn-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getBullhornStaffAugSecrets = async (): Promise<BullhornCredentials> => {
  const secretPath = 'smoothstack/staffaug-bullhorn-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getSquareSpaceSecrets = async (): Promise<SquareSpaceCredentials> => {
  const secretPath = 'smoothstack/squarespace-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getZoomSecrets = async (): Promise<ZoomCredentials> => {
  const secretPath = 'smoothstack/zoom-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getHelloSignSecrets = async (): Promise<HelloSignCredentials> => {
  const secretPath = 'smoothstack/hellosign-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getHackerRankSecrets = async (): Promise<HackerRankSecrets> => {
  const secretPath = 'smoothstack/hackerrank-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getMSSecrets = async (): Promise<MicrosoftCredentials> => {
  const secretPath = 'smoothstack/microsoft-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};

export const getSFDCSecrets = async (): Promise<SalesforceCredentials> => {
  const secretPath = 'smoothstack/salesforce-credentials';
  const client = new SecretsManager({
    region: 'us-east-1',
  });

  const res = await client.getSecretValue({ SecretId: secretPath }).promise();
  return JSON.parse(res.SecretString);
};