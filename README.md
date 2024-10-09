# AWS CDK NestedStackのメモ

## memo
```mermaid
graph TD
  A[App] --> B[Stack1<br>Parent]
  A --> C[Stack2<br>ParentABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF]
  A --> D[Stack3<br>Sample]

  D --> I[SQS]

  B --> E[NestedStack1<br>Child1]
  B --> F[NestedStack2<br>Child1ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF]

  C --> E
  C --> F

  E --> I
  F --> I
```