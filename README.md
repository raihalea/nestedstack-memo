# AWS CDK NestedStackのメモ

## memo
```mermaid
graph TD
  A[App] --> B[Stack1]
  A --> C[Stack2]
  A --> D[Stack3]

  B --> E[NestedStack1 (Child1)]
  B --> F[NestedStack2 (Child1ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF)]

  C --> G[NestedStack1 (Child2)]
  C --> H[NestedStack2 (Child2ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF)]

  D --> I[SQS]

  E --> J[SQS (Child1 SQS)]
  F --> K[SQS (Child1ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF SQS)]
  G --> L[SQS (Child2 SQS)]
  H --> M[SQS (Child2ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF SQS)]
  ~~~