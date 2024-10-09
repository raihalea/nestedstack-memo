// import * as cdk from "aws-cdk-lib";
// import { Construct } from "constructs";
// import * as sqs from "aws-cdk-lib/aws-sqs";

// export class Stack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);

//     new NestedStack(this, "Nested");
//   }
// }

// class NestedStack extends cdk.NestedStack {
//   constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
//     super(scope, id, props);
    
//     const queue = new sqs.Queue(this, "NestedtestQueue", {
//       visibilityTimeout: cdk.Duration.seconds(300),
//     });
//   }
// }
