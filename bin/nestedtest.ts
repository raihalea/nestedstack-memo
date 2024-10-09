#!/usr/bin/env node
import 'source-map-support/register';
import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib';
import * as sqs from "aws-cdk-lib/aws-sqs";

class Stack1 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NestedStack1(this, "Child1");
    new NestedStack2(this, "Child1ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF");
  }
}
class Stack2 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NestedStack1(this, "Child2");
    new NestedStack2(this, "Child2ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF");  }
}

class Stack0 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, "SQS");  }
}

class NestedStack1 extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);
    
    const queue = new sqs.Queue(this, "SQS");
  }
}
class NestedStack2 extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);
    
    const queue = new sqs.Queue(this, "SQSABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF");
  }
}

const app = new cdk.App();
new Stack0(app, 'Sample')
new Stack1(app, 'Parent');
new Stack2(app, 'ParentABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF');
