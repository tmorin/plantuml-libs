# AWS V3 - Amazon Web Services

## Include the library

Include remotely the library:
```plantuml
@startuml
!global $AWS_LIB_BRANCH="master"
!global $AWS_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $AWS_LIB_BRANCH + "/aws-v3"
!includeurl $AWS_LIB_BASE_URL/library.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
!global $INCLUSION_MODE="local"
!include library.puml
@enduml
```

## Include the sub-libraries

Additional sub-libraries can be included.

```plantuml
@startuml
includeSubLibrary("groups")
includeSubLibrary("elements/Compute")
includeSubLibrary("elements/SecurityIdentityCompliance")
includeSubLibrary("elements/Storage")
includeSubLibrary("elements/General")
@enduml
```

## Sub libraries

- [The Groups](groups.md)
- [The Elements](elements/README.md)
- [The Sprites](sprites.md)

## Examples

### Git to S3 Webhooks

![example: Git to S3 Webhooks](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/aws-v3/example-git_to_s3_webhooks.puml&fmt=png)

The source: [example-git_to_s3_webhooks.puml](example-git_to_s3_webhooks.puml)

### Chef Automate Architecture on AWS

![example: Chef Automate Architecture on AWS](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/aws-v3/example-chef_automate_architecture_on_aws.puml&fmt=png)

The source: [example-chef_automate_architecture_on_aws.puml](example-chef_automate_architecture_on_aws.puml)
