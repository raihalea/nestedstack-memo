# AWS CDK NestedStackのメモ

## memo
```mermaid
graph TD
  A[App] --> B[Stack1]
  A --> C[Stack2]
  A --> D[Stack3]

  B --> E[NestedStack1_Child1]
  B --> F[NestedStack2_Child1_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF]

  C --> G[NestedStack1_Child2]
  C --> H[NestedStack2_Child2_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF]

  D --> I[SQS]

  E --> J[SQS_Child1]
  F --> K[SQS_Child1_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF]
  G --> L[SQS_Child2]
  H --> M[SQS_Child2_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF]
  ```