import { AWS } from '@serverless/typescript';

export const snsResources: AWS['resources']['Resources'] = {
  LinksGenerationTopic: {
    Type: 'AWS::SNS::Topic',
    Properties: {
      TopicName: 'smoothstack-links-generation-sns-topic',
    },
  },
  DocumentGenerationTopic: {
    Type: 'AWS::SNS::Topic',
    Properties: {
      TopicName: 'smoothstack-document-generation-sns-topic',
    },
  },
  WebinarProcessingTopic: {
    Type: 'AWS::SNS::Topic',
    Properties: {
      TopicName: 'smoothstack-webinar-processing-sns-topic',
    },
  },
  AppointmentGenerationTopic: {
    Type: 'AWS::SNS::Topic',
    Properties: {
      TopicName: 'smoothstack-appointment-generation-sns-topic',
    },
  },
  FormProcessingTopic: {
    Type: 'AWS::SNS::Topic',
    Properties: {
      TopicName: 'smoothstack-form-processing-sns-topic',
    },
  },
};